
import { scopes, spotifyApi } from "@/app/config/page";
import { ExtendedToken, TokenError } from "@/app/Context/page";
import { CallbacksOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import SpotifyProvider from "next-auth/providers/spotify";



const refreshAccessToken = async (token: ExtendedToken): Promise<ExtendedToken> => {
    try {

        spotifyApi.setAccessToken(token.accessToken)
        spotifyApi.setRefreshToken(token.refreshToken)

        const { body: refreshedToken } = await spotifyApi.refreshAccessToken()
        // console.log('Refreshed tokens are:', refreshAccessToken)
        return {
            ...token,
            accessToken: refreshedToken.access_token,
            refreshToken: refreshedToken.refresh_token || token.refreshToken,
            accessTokenExpireAt: Date.now() + refreshedToken.expires_in * 100000

        }
    } catch (error) {
        console.log(error)
    }
    return {
        ...token,
        error: TokenError.RefreshAccessTokenError
    }
}

const jwtCallback: CallbacksOptions['jwt'] = async ({
    token,
    account,
    user
}) => {
    let extendedToken: ExtendedToken
    if (account && user) {
        extendedToken = {
            ...token,
            user,
            accessToken: account.access_token as string,
            refreshToken: account.refresh_token as string,
            accessTokenExpiresAt: (account.expires_at as number) * 1000 // converted to ms
        }

        console.log('FIRST TIME LOGIN, EXTENDED TOKEN: ', extendedToken)
        return extendedToken
    }

    // Subsequent requests to check auth sessions
    if (Date.now() + 5000 < (token as ExtendedToken).accessTokenExpiresAt) {
        console.log('ACCESS TOKEN STILL VALID, RETURNING EXTENDED TOKEN: ', token)
        return token
    }

    // Access token has expired, refresh it
    console.log('ACCESS TOKEN EXPIRED, REFRESHING...')
    return await refreshAccessToken(token as ExtendedToken)
}


const sessionCallback: CallbacksOptions['session'] = async ({
    session,
    token
}) => {
    session.accessToken = (token as ExtendedToken).accessToken
    session.error = (token as ExtendedToken).error

    return session
}

export const options: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            authorization: {
                url: 'https://accounts.spotify.com/authorize',
                params: {
                    scope: scopes
                }
            },
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Huy"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "12"
                }
            },
            async authorize(credentials) {
                const user = { id: "07", name: "Huy", password: "12" }
                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        jwt: jwtCallback,
        session: sessionCallback

    }
}



