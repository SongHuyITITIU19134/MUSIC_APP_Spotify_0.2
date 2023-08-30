'use client'
import useSpotify from "@/hooks/page";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { songReducer } from "../Reducer/songReducer";
import { ISongContext, SongContextState, SongReducerActionType } from "../types/page";

const defaultSongContextState: SongContextState = {
    selectedSongId: undefined,
    selectedSong: null,
    isPlaying: false,
    volume: 0,
    deviceId: null
}

export const SongContext = createContext<ISongContext>({
    songContextState: defaultSongContextState,
    dispatchSongAction: () => { }

})
export const useSongContext = () => useContext(SongContext)

const SongContextProvider = ({ children }: { children: ReactNode }) => {
    const spotifyApi = useSpotify();
    const { data: session } = useSession();
    const [songContextState, dispatchSongAction] = useReducer(songReducer, defaultSongContextState);

    useEffect(() => {
        const setCurrentDevice = async () => {
            const availableDevicesResponse = await spotifyApi.getMyDevices()

            console.log("availableDevicesResponse", availableDevicesResponse)
            if (!availableDevicesResponse.body.devices.length) {
                return
                const { id: deviceId } = availableDevicesResponse.body.devices[0]
                dispatchSongAction({
                    type: SongReducerActionType.SetDevice,
                    payload: {
                        deviceId,
                        volume: 100
                    }
                })
                await spotifyApi.transferMyPlayback([deviceId as string])
            }

        }

        if (spotifyApi.getAccessToken()) {
            setCurrentDevice()
        }
    }, [spotifyApi, session])

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