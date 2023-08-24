import React from 'react'
import style from './avatar.module.css'
import Link from 'next/link';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import Image from 'next/image';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

function Avatar() {
    return (
        <div className={style.avatar_cover}>
            <div className={style.back}>
                <Link href="/profile" passHref>
                    <Button variant="contained" size="large" >
                        <ArrowCircleLeftOutlinedIcon fontSize='medium' color="action" />  Edit Profile
                    </Button>
                </Link>
            </div>
            <div className={style.image}>
                <div className={style.image_property}>
                    <Image
                        className={style.image_border}
                        src="/COVER-Music.png"
                        width={800}
                        height={600}
                        alt="Picture of the author"
                    />
                </div>

            </div>
            <div className={style.action_image}>
                <div className={style.action_box}>
                    <Button >
                        <AddOutlinedIcon sx={{ fontSize: 40 }} color='primary' />
                        UpLoad Photo
                    </Button>

                </div>

            </div>
            <div className={style.action}>
                <div className={style.cancel}>
                    <Link href='/profile'>
                    <Button variant="contained" color="error" endIcon={<CancelOutlinedIcon />}>
                        Cancel
                    </Button>
                    </Link>
                   
                </div>
                <div className={style.save}>
                    <Button variant="contained" color="success" endIcon={<SaveOutlinedIcon />}>
                        Save
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Avatar
