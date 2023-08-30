import React from 'react'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { lightBlue } from '@mui/material/colors';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';

const blue = lightBlue[900];

const isPlaying = false
const MusicPlay = () => {
  return (
    <div className='music-box'>
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
                 <SkipPreviousIcon  sx={{ color: blue, fontSize: 45 }} />
                </div>
                <div className='fast-left'>
                  <FastRewindIcon  sx={{ color: blue, fontSize: 45 }}/>
                </div>
                {
                    isPlaying ? <div className='pause-action'>
                    <PauseCircleFilledIcon  sx={{ color: blue, fontSize: 45 }}/>
                    </div> : <div className='play-action'>  <PlayCircleFilledWhiteIcon  sx={{ color: blue, fontSize: 45 }}/></div>
                }
               
                <div className='fast-right'>
                  <FastForwardIcon  sx={{ color: blue, fontSize: 45 }}/>
                </div>
                <div className='skip-right'>
                <SkipNextIcon  sx={{ color: blue, fontSize: 45 }}/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default MusicPlay
