"use client"
import { useState, useEffect } from 'react';
import style from './video.module.css'
import IconButton from '@mui/material/IconButton';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Image from 'next/image';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import FirstPageOutlinedIcon from '@mui/icons-material/FirstPageOutlined';
import LastPageOutlinedIcon from '@mui/icons-material/LastPageOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
const VideoImage = () => {
  const [next, setNext] = useState(true);


  return (
    <div className={style.background}>
      <div className={style.cover}>
        <div className={style.button_left}>
          <IconButton onClick={() => setNext(!next)}>
            <ArrowCircleLeftOutlinedIcon
              sx={{ fontSize: 50 }}
              color='primary' />
          </IconButton>
        </div>
        <div className={style.main}>
          {next ? <div className={style.video_image}>
            <Image
              className={style.image}
              src="/COVER-Music.png"
              width={650}
              height={650}
              alt="Picture of the author"
            />
          </div>
            :
            <div className={style.lyric}>
              lyric 
            </div>}
        </div>
        <div className={style.button_right}>
          <IconButton onClick={() => setNext(!next)}>
            <ArrowCircleRightOutlinedIcon
              sx={{ fontSize: 50 }}
              color='primary' />
          </IconButton>
        </div>
      </div>
      <div className={style.bar_music}>
        <div className={style.cover_bar}>

          <div className={style.action}>
            <IconButton >
              <FirstPageOutlinedIcon
                sx={{ fontSize: 50 }}
                color='primary' />
            </IconButton>
            <IconButton >
              <KeyboardDoubleArrowLeftOutlinedIcon
                sx={{ fontSize: 50 }}
                color='primary' />
            </IconButton>
            <IconButton>
              <PlayCircleOutlineOutlinedIcon
                sx={{ fontSize: 50 }}
                color='primary' />
            </IconButton>
            <IconButton >
              <KeyboardDoubleArrowRightOutlinedIcon
                sx={{ fontSize: 50 }}
                color='primary' />
            </IconButton>
            <IconButton >
              <LastPageOutlinedIcon
                sx={{ fontSize: 50 }}
                color='primary' />
            </IconButton>
          </div>
          <div className={style.bar_infor}>
            <div className={style.infor}>
              <div className={style.bar_image}>
                <Image
                  className='boder-image'
                  src="/COVER-Music.png"
                  width={90}
                  height={73}
                  alt="Picture of the author"
                />
              </div>
              <div className={style.infor_music}>
                <div className={style.name}>
                  name
                </div>
                <div className={style.author}>
                  author
                </div>
              </div>
            </div>
            <div className={style.bar}>
              <svg xmlns="http://www.w3.org/2000/svg" width="353" height="4" viewBox="0 0 353 4" fill="none">
                <path opacity="0.7" d="M2 2H351" stroke="#848484" stroke-width="6" stroke-linecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoImage
