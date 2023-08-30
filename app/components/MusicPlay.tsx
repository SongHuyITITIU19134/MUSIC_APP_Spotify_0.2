import useSpotify from '@/hooks/page';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Button from '@mui/material/Button';
import { lightBlue } from '@mui/material/colors';
import Image from 'next/image';
import { useSongContext } from '../PlayListContext/SongContext';
import { SongReducerActionType } from '../types/page';

const blue = lightBlue[900];


const MusicPlay = () => {
  const spotifyApi = useSpotify();

  const { songContextState: { isPlaying, selectedSong, deviceId }, dispatchSongAction } = useSongContext()


  const handlePlayPause = async () => {
    const response = await spotifyApi.getMyCurrentPlaybackState()
    if (!response.body) return
    if (response.body.is_playing) {
      await spotifyApi.pause()
      dispatchSongAction(
        {
          type: SongReducerActionType.ToggleIsPlaying,
          payload: false
        }
      )
    } else {
      await spotifyApi.play()
      dispatchSongAction(
        {
          type: SongReducerActionType.ToggleIsPlaying,
          payload: true
        }
      )
    }
  }
  const handleSkipSong = async (skipTo: 'previous' | 'next') => {
    if (!deviceId) return

    if (skipTo === 'previous') {
      await spotifyApi.skipToPrevious()
    }
    else
      await spotifyApi.skipToNext()

    const songInfo = await spotifyApi.getMyCurrentPlayingTrack()

    if (!songInfo.body) return
    dispatchSongAction({
      type: SongReducerActionType.SetCurrentPlayingSong,
      payload: {
        selectedSongId: songInfo.body.item?.id,
        selectedSong: songInfo.body.item as SpotifyApi.TrackObjectFull,
        isPlaying: songInfo.body.is_playing
      }
    })
  }
  return (
    <>
      <div className='card-music-2'>
        <a href='video'>
          <div className='image-card-2'>
            <Image className='iamge-card-property' src={selectedSong?.album.images[0].url || ''} alt='Images'
              height={250}
              width={330} />
          </div></a>
        <div className='body2'>
          <div className='card-title-2'>
            {selectedSong?.name}
          </div>
          <div className='card-author-2'>
            {selectedSong?.artists[0].name}
          </div>
        </div>
        <div className='card-action'>
          <div className='card-action-footer'>
            <div className='skip-left'>
            <Button onClick={handleSkipSong.bind(this, 'previous')}>
              <SkipPreviousIcon sx={{ color: blue, fontSize: 45 }} />
              </Button>
            </div>
            <div className='fast-left'>
              

              <FastRewindIcon sx={{ color: blue, fontSize: 45 }} />
            
            </div>
            {
              isPlaying ? (<div className='pause-action'>
                <Button onClick={handlePlayPause}>
                  <PauseCircleFilledIcon sx={{ color: blue, fontSize: 45 }} />
                </Button>
              </div>) : (
                <div className='play-action'> <Button onClick={handlePlayPause}> <PlayCircleFilledWhiteIcon sx={{ color: blue, fontSize: 45 }} />
                </Button></div>)
            }


            <div className='fast-right'>
              <FastForwardIcon sx={{ color: blue, fontSize: 45 }} />
            </div>
            <div className='skip-right'>
            <Button onClick={handleSkipSong.bind(this, 'next')}>
              <SkipNextIcon sx={{ color: blue, fontSize: 45 }} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MusicPlay