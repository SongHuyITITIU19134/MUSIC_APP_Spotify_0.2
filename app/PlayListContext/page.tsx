'use client'
import { IPlaylistContext, PlaylistContextState } from "@/app/Context/page";
import useSpotify from "@/hooks/page";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";


const defaultPlaylistContextState: PlaylistContextState = {
	playlists: [],
	selectedPlaylistId: null,
	selectedPlaylist: null
}

export const PlaylistContext = createContext<IPlaylistContext>({
	playlistContextState: defaultPlaylistContextState,
	updatePlaylistContextState: () => {}
})

export const usePlaylistContext = () => useContext(PlaylistContext)

const PlaylistContextProvider = ({ children }: { children: ReactNode }) => {
	const spotifyApi = useSpotify()
	const { data: session } = useSession()

	const [playlistContextState, setPlaylistContextState] = useState(
		defaultPlaylistContextState
	)

	const updatePlaylistContextState = (
		updatedObj: Partial<PlaylistContextState>
	) => {
		setPlaylistContextState(previousPlaylistContextState => ({
			...previousPlaylistContextState,
			...updatedObj
		}))
	}

	useEffect(() => {
		const getUserPlaylists = async () => {
			const userPlaylistResponse = await spotifyApi.getUserPlaylists()
			updatePlaylistContextState({ playlists: userPlaylistResponse.body.items })
		}

		if (spotifyApi.getAccessToken()) {
			getUserPlaylists()
		}
	}, [session, spotifyApi])

	const playlistContextProviderData = {
		playlistContextState,
		updatePlaylistContextState
	}

	return (
		<PlaylistContext.Provider value={playlistContextProviderData}>
			{children}
		</PlaylistContext.Provider>
	)
}

export default PlaylistContextProvider