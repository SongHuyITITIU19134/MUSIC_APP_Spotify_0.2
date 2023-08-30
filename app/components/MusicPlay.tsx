import useSpotify from '@/hooks/page';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Button from '@mui/material/Button';
import { lightBlue } from '@mui/material/colors';

const blue = lightBlue[900];

const isPlaying = true
const MusicPlay = () => {
  const spotifyApi = useSpotify();

  // const { songContextState: { isPlaying }, dispatchSongAction } = useSongContext()


  const handlePlayPause = async () => {
    const response = await spotifyApi.getMyCurrentPlaybackState()
    if (!response.body) return
    if (response.body.is_playing) {
      await spotifyApi.pause()
      // dispatchSongAction(
      //   {
      //     type: SongReducerActionType.ToggleIsPlaying,
      //     payload: false
      //   }
      // )
    } else {
      await spotifyApi.play()
      // dispatchSongAction(
      //   {
      //     type: SongReducerActionType.ToggleIsPlaying,
      //     payload: true
      //   }
      // )
    }
  }
  return (
    <>
      <div className='card-music-2'>
        <a href='video'><div className='image-card-2'>
        </div></a>
        <div className='body2'>
          <div className='card-title-2'>
            title
          </div>
          <div className='card-author-2'>
            author
          </div>
        </div>
        <div className='card-action'>
          <div className='card-action-footer'>
            <div className='skip-left'>
              <SkipPreviousIcon sx={{ color: blue, fontSize: 45 }} />
            </div>
            <div className='fast-left'>
              <FastRewindIcon sx={{ color: blue, fontSize: 45 }} />
            </div>


            {
              isPlaying ? <div className='pause-action'>
                <Button onClick={handlePlayPause}>
                  <PauseCircleFilledIcon sx={{ color: blue, fontSize: 45 }} />
                </Button>
              </div> : <div className='play-action'> <Button onClick={handlePlayPause}> <PlayCircleFilledWhiteIcon sx={{ color: blue, fontSize: 45 }} /></Button></div>
            }


            <div className='fast-right'>
              <FastForwardIcon sx={{ color: blue, fontSize: 45 }} />
            </div>
            <div className='skip-right'>
              <SkipNextIcon sx={{ color: blue, fontSize: 45 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MusicPlay
