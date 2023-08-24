"use client"
import React, { useState } from 'react'
import style from './music.module.css'
import { Button } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


const Music = () => {
    enum Status {
        Next,
        Lyric,
        Related,
    }
    const [status, setStatus] = useState(Status.Next);
    console.log(status)
    return (
        <div className={style.cover}>
            <div className={style.image}>
                image
            </div>
            <div className={style.playlist}>
                <div className={style.action}>
                    <div className={style.next} style={{ borderBottom: status === 0 ? '5px solid #FFF' : '0' }}>
                        <Button sx={{ fontSize: 17}} variant="contained" onClick={() => setStatus(Status.Next)} >
                            Next
                        </Button>
                        {
                            
                        }
                    </div>
                    <div className={style.lyric} style={{ borderBottom: status === 1 ? '5px solid #FFF' : '0' }}>
                        <Button sx={{ fontSize: 17}} variant="contained" onClick={() => setStatus(Status.Lyric)} >
                            Lyric
                        </Button>
                    </div>
                    <div className={style.related} style={{ borderBottom: status === 2 ? '5px solid #FFF' : '0' }}>
                        <Button sx={{ fontSize: 17}} variant="contained" onClick={() => setStatus(Status.Related)} >
                            Related
                        </Button>
                    </div>
                </div>
                <div className={style.display}>
                    {status == 0 ? (
                        <div className={style.next_song}>
                            <div className={style.avatar_song}>
                                avatar_song
                            </div>
                            <div className={style.infor}>
                                <div className={style.title}>
                                Title
                                </div>
                                <div className={style.name}>
                                name
                                </div>
                            </div>
                            <div className={style.time}>
                                time
                            </div>
                            <div className={style.action_song}>
                                <Button variant='contained'>
                                <MoreVertOutlinedIcon/>
                                </Button>
                            </div>
                        </div>
                    ) : status == 1 ? (
                        <div className={style.lyric_song}>
                                   <h1>Lyric</h1>
                        </div>
                    ) : status == 2 ? (
                        <div className={style.next_song}>
                            <div className={style.avatar_song}>
                                avatar_song
                            </div>
                            <div className={style.infor}>
                                <div className={style.title}>
                                Title
                                </div>
                                <div className={style.name}>
                                name
                                </div>
                            </div>
                            <div className={style.time}>
                                time
                            </div>
                            <div className={style.action_song}>
                                <Button variant='contained'>
                                <MoreVertOutlinedIcon/>
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <h1>Loading.... </h1>
                    )
                    }

                </div>

            </div>
        </div>
    )
}

export default Music
