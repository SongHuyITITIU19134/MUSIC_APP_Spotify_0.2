'use client'
import useSpotify from "@/hooks/page";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useContext } from "react";
import { ISongContext, SongContextState } from "../types/page";

const defaultSongContextState: SongContextState = {
    selectedSongId: undefined,
    selectedSong: null,
    isPlaying: false

}

export const SongContext = createContext<ISongContext>({
    songContextState: defaultSongContextState,
    dispatchSongAction: () => { }

})
export const useSongContext = () => useContext(SongContext)

const SongContextProvider = ({ children }: { children: ReactNode }) => {
    const SpotifyApi = useSpotify();
    const { data: session } = useSession();

    const SongContextProviderData = {
        songContextState: defaultSongContextState
    }
    return (
        <SongContext.Provider value={SongContextProviderData}>
            {children}
        </SongContext.Provider>
    )
}
export default SongContextProvider