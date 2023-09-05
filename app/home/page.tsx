'use client'
import useSpotify from '@/hooks/page';
import 'animate.css';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { usePlaylistContext } from '../PlayListContext/page';
import MusicPlay from '../components/MusicPlay';
import Songs from '../components/Songs';
import { HideImage } from '@mui/icons-material';
import { styled } from '@mui/material';

export default function Home() {
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();
    const spotifyApi = useSpotify()
    // Display Album
    const { playlistContextState: { playlists, selectedPlaylist, selectedPlaylistId }, updatePlaylistContextState
    } = usePlaylistContext();

    const setSelectPlaylist = async (playlistId: string) => {
        const playlistResponse = await spotifyApi.getPlaylist(playlistId);
        updatePlaylistContextState({
            selectedPlaylistId: playlistId,
            selectedPlaylist: playlistResponse.body
        });

    }
    


    return (
        <>
            <div className={`app_music
            ${open ? '' : ''}`} style={{ width: open ? 500 : 0 }}
            >
                {open ?
                <>
                <div className='head'>
                    <div className='title'>
                        <h1 className='h1'>Next Song</h1>
                        <div>

                        </div>
                    </div>
                    <div className='button-add'>
                        <div className='button-add-property'><button>Add more</button>
                        </div>
                    </div>
                </div>
                        <div className="app">
                            <div className='card-music'>
                                <div className='image-music-card'>
                                    <Image
                                        className='boder-image'
                                        src="/COVER-Music.png"
                                        width={130}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div className='title-card'>
                                    aaaa
                                </div>
                                <div className='author-card'>
                                    aasdas
                                </div>
                            </div>
                        </div>
                        <div className={`music-box
            ${open ? 'animate__fadeIn' : 'animate__fadeOut'}`} >
                            <MusicPlay />
                        </div>

                    </>
                    : <></>
                }


            </div>
            <div className='slide-right'>
                <div className='button1'>
                    <button className='button-expand' onClick={() => setOpen(!open)}>Expand</button>
                </div>
                <div className='music-list'>
                    <div className='music-main'>
                        <h1>Hello, {session?.user?.name}</h1>

                        <Image
                            src={session?.user?.image || '/COVER-Music.png'}
                            alt='User Avatar'
                            height={40}
                            width={40}
                        />
                        <div className='main-image'>
                            <Image
                                className='home-image'
                                src='/COVER-Music.png'
                                width={803}
                                height={303}
                                alt='Image Cover Music'
                            />
                            <div className="bottom-left">Name</div>
                        </div>
                        <section>
                            {
                                selectedPlaylist && (
                                    <>
                                        <div className="head-trending">
                                            <div className="title-trending">
                                                <h1>Your Playlist Music</h1>
                                            </div>
                                            <div className="see-all-trending">
                                                <a href='#'>See All</a>
                                            </div>
                                        </div>
                                        <div className='main-trending'>

                                        </div>
                                        {
                                            <div className='main-trending'>
                                                <Songs />
                                            </div>
                                        }

                                    </>
                                )
                            }

                        </section>

                    </div>
                    <div className={`music-list-artist
            ${open ? 'animate__fadeOut' : 'animate__fadeIn'}`}  >
                        <div className='header'>
                            <div className='header-title'>
                                <h1>Top List</h1>
                            </div>
                            <div className='header-link'>
                                <a href='#'>See All</a>
                            </div>
                        </div>
                        <div className='top-list'>
                            <div className='card-group'>
                                <div className='top-list-image'>
                                    <Image
                                        className='home-image'
                                        src='/COVER-Music.png'
                                        width={80}
                                        height={70}
                                        alt='Image Cover Music'
                                    />
                                </div>
                                <div className='top-list-name'>
                                    <p>Name</p>
                                    <p>Author</p>
                                </div>
                                <div className='top-list-action'>
                                    <p>Action</p>
                                </div>
                            </div>
                            <div className='card-group'>
                                <div className='top-list-image'>
                                    <Image
                                        className='home-image'
                                        src='/COVER-Music.png'
                                        width={80}
                                        height={70}
                                        alt='Image Cover Music'
                                    />
                                </div>
                                <div className='top-list-name'>
                                    <p>Name</p>
                                    <p>Author</p>
                                </div>
                                <div className='top-list-action'>
                                    <p>Action</p>
                                </div>
                            </div>
                            <div className='card-group'>
                                <div className='top-list-image'>
                                    <Image
                                        className='home-image'
                                        src='/COVER-Music.png'
                                        width={80}
                                        height={70}
                                        alt='Image Cover Music'
                                    />
                                </div>
                                <div className='top-list-name'>
                                    <p>Name</p>
                                    <p>Author</p>
                                </div>
                                <div className='top-list-action'>
                                    <p>Action</p>
                                </div>
                            </div>
                            <div className='card-group'>
                                <div className='top-list-image'>
                                    <Image
                                        className='home-image'
                                        src='/COVER-Music.png'
                                        width={80}
                                        height={70}
                                        alt='Image Cover Music'
                                    />
                                </div>
                                <div className='top-list-name'>
                                    <p>Name</p>
                                    <p>Author</p>
                                </div>
                                <div className='top-list-action'>
                                    <p>Action</p>
                                </div>
                            </div>


                        </div>
                        <div className='your_music'>
                            <h1>Your Music</h1>
                            <div className='cover_fav_music'>
                                {playlists.map(({ id, name, images }) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className='card_fav'>
                                        <div className='card_fav_img' onClick={() => setSelectPlaylist(id)}>
                                            <Image className='card_image_fav' src={images[0].url} width={100} height={100} alt='image' />

                                        </div>
                                        <p
                                            className='card_fav_text'>
                                            {name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

