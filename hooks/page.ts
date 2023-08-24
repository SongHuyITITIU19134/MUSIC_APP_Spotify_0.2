'use client'
import { ExtendedSession, TokenError } from '@/app/Context/page'
import { spotifyApi } from '@/app/config/page'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
const useSpotify = () => {
	const { data: session } = useSession()
	useEffect(() => {
		if (!session) return

		// if refresh token fails, redirect to login
		if (
			(session as ExtendedSession).error === TokenError.RefreshAccessTokenError
		) {
			signIn()
		}

		spotifyApi.setAccessToken((session as ExtendedSession).accessToken)
	}, [session])

	return spotifyApi
}

export default useSpotify