import style from './profile.module.css'
import React from 'react'
import Image from 'next/image'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Link from 'next/link';

const Profile = () => {
    return (
        <div className={style.background}>
            <div className={style.cover}>
                <div className={style.avatar}>
                    <div className={style.avatar_image}>
                        <a href='/avatar'>
                            <Image
                                className={style.avatar_image_property}
                                src="/COVER-Music.png"
                                width={150}
                                height={100}
                                alt="Picture of the author"
                            />
                        </a>


                    </div>
                </div>
                <div className={style.main}>
                    <h2 className={style.header}>Full Name</h2>
                    <div className={style.fullname}>
                        <div className={style.firstname}>
                            <input required className={style.text_1} type="text" placeholder='Input Your First Name' />
                        </div>
                        <div className={style.lastname}>
                            <input required className={style.text_2} type="text" placeholder='Input Your Last Name' />
                        </div>
                    </div>
                    <div className={style.email}>
                        <h2 className={style.header}>Email</h2>
                        <input required className={style.text} type="text" placeholder='Input Email Here' />
                    </div>
                    <div className={style.password}>
                        <h2 className={style.header}>Password</h2>
                        <input required className={style.text} type="text" placeholder='Password' />
                    </div>
                    <div className={style.confirm}>
                        <h2 className={style.header}>Confirm Password</h2>
                        <input required className={style.text} type="text" placeholder='Confirm Your Password' />
                    </div>
                    <div className={style.phone}>
                        <h2 className={style.header}>Phone Number</h2>
                        <input required className={style.text} type="text" placeholder='Input Number Phone' />
                    </div>
                    <div className={style.address}>
                        <h2 className={style.header}>Address</h2>
                        <input required className={style.text} type="text" placeholder='Input Address' />
                    </div>
                    <div className={style.city}>
                        <h2 className={style.header}>City</h2>
                        <div className={style.city_name}>
                            <input required className={style.text_1} type="text" placeholder='Input Your First Name' />
                        </div>
                        <div className={style.city_number}>
                            <input required className={style.text_2} type="text" placeholder='Input Your Last Name' />
                        </div>
                    </div>
                </div>
                <div className={style.action}>
                    <div className={style.cancel}>
                        <Link href='/'>
                        <Button size="small" variant="contained" color="error" endIcon={<CancelOutlinedIcon />}>
                            Cancel
                        </Button>
                        </Link>
                       
                    </div>
                    <div className={style.save}>
                        <Button size="small" variant="contained" color="success" endIcon={<SaveOutlinedIcon />}>
                            Save
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
