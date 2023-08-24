'use client'
import useSpotify from '@/hooks/page';
import 'animate.css';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { usePlaylistContext } from '../PlayListContext/page';

export default function Home() {
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();
    const spotifyApi = useSpotify()
    // Display Album
    const { playlistContextState: { playlists,selectedPlaylist, selectedPlaylistId }, updatePlaylistContextState
    } = usePlaylistContext();

    const setSelectPlaylist = async (playlistId: string) => {
        const playlistResponse = await spotifyApi.getPlaylist(playlistId)
        updatePlaylistContextState({
            selectedPlaylistId: playlistId,
            selectedPlaylist: playlistResponse.body
        })
    }
      
    return (
        <>
            <div className={`app_music
            ${open ? 'animation' : ''}`} style={{ width: open ? 500 : 0 }}
            >
                <div className='head'>
                    <div className='title'>
                        <h1 className='h1'>Next Song</h1>

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
                        <div>
                        </div>
                        <div className='title-card'>
                            aaaa
                        </div>
                        <div className='author-card'>
                            aasdas
                        </div>
                    </div>
                </div>
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
                        <div className='bar-action'>

                            <div className='button-left-side'>

                            </div>
                            <div className='button-right-side'>
                                right
                            </div>

                        </div>
                        <div className='card-action'>
                            <div className='card-action-footer'>
                                <div className='skip-left'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 27 20" fill="none">
                                        <path d="M25.8492 19L2.3198 9.99998L25.8492 0.999956L25.8492 19Z" fill="white" stroke="#483636" stroke-width="2" stroke-linejoin="round" />
                                        <path d="M2.31976 17.5L2.31976 2.49996" stroke="#483636" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <div className='fast-left'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                        <path d="M26 26L12.6667 13.5L26 1L26 26Z" fill="white" stroke="#483636" stroke-width="2" stroke-linejoin="round" />
                                        <path d="M14.3334 26L1.00004 13.5L14.3334 1L14.3334 26Z" fill="white" stroke="#483636" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className='play-action'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="67" height="58" viewBox="0 0 67 58" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.999908 29.0162C0.999908 13.5615 15.5623 1 33.4444 1C51.3264 1 65.8888 13.5615 65.8888 29.0162C65.8888 44.4385 51.3264 57 33.4444 57C15.5623 57 0.999908 44.4385 0.999908 29.0162ZM45.3448 31.85C45.6893 31.5528 46.1278 31.0936 46.2217 30.9855C46.7228 30.4182 46.9733 29.7159 46.9733 29.0162C46.9733 28.2301 46.6915 27.5007 46.1591 26.9064C46.1155 26.8688 46.03 26.7885 45.9187 26.6839C45.7104 26.4883 45.4113 26.2074 45.1256 25.9609C42.5576 23.5837 35.8558 19.6937 32.3483 18.5051C31.8159 18.3187 30.4693 17.9108 29.749 17.8837C29.06 17.8837 28.4023 18.0188 27.776 18.289C26.9931 18.6671 26.3667 19.2615 26.0222 19.9638C25.803 20.4501 25.4585 21.9088 25.4585 21.9358C25.114 23.5297 24.9261 26.123 24.9261 28.9865C24.9261 31.7176 25.114 34.2002 25.3959 35.821C25.4037 35.8277 25.4306 35.9436 25.4724 36.1237C25.5997 36.6712 25.8647 37.8118 26.1475 38.2793C26.8365 39.4139 28.1831 40.1163 29.6237 40.1163H29.749C30.6885 40.0892 32.6614 39.3869 32.6614 39.3599C35.9811 38.1712 42.5263 34.4703 45.1569 32.0121L45.3448 31.85Z" fill="white" />
                                        <path d="M46.2217 30.9855L45.847 30.6545L45.8444 30.6575L46.2217 30.9855ZM45.3448 31.85L45.6714 32.2286L45.6714 32.2286L45.3448 31.85ZM46.1591 26.9064L46.5315 26.5728L46.51 26.5488L46.4857 26.5278L46.1591 26.9064ZM45.9187 26.6839L46.261 26.3195L46.261 26.3195L45.9187 26.6839ZM45.1256 25.9609L44.786 26.3278L44.7924 26.3338L44.799 26.3395L45.1256 25.9609ZM32.3483 18.5051L32.183 18.977L32.1878 18.9786L32.3483 18.5051ZM29.749 17.8837L29.7677 17.3841L29.7583 17.3837H29.749V17.8837ZM27.776 18.289L27.578 17.8298L27.5681 17.8341L27.5585 17.8387L27.776 18.289ZM26.0222 19.9638L25.5733 19.7436L25.5698 19.7509L25.5664 19.7583L26.0222 19.9638ZM25.4585 21.9358L25.9472 22.0415L25.9585 21.9893V21.9358H25.4585ZM25.3959 35.821L24.9033 35.9067L24.9339 36.0828L25.0693 36.1996L25.3959 35.821ZM25.4724 36.1237L24.9854 36.2369L24.9854 36.2369L25.4724 36.1237ZM26.1475 38.2793L25.7197 38.5381L25.7201 38.5388L26.1475 38.2793ZM29.749 40.1163V40.6163H29.7562L29.7633 40.616L29.749 40.1163ZM32.6614 39.3599L32.4929 38.8891L32.1614 39.0078V39.3599H32.6614ZM45.1569 32.0121L44.8304 31.6335L44.8228 31.6399L44.8156 31.6467L45.1569 32.0121ZM33.4444 0.5C15.3577 0.5 0.499908 13.2189 0.499908 29.0162H1.49991C1.49991 13.9041 15.7669 1.5 33.4444 1.5V0.5ZM66.3888 29.0162C66.3888 13.2189 51.531 0.5 33.4444 0.5V1.5C51.1218 1.5 65.3888 13.9041 65.3888 29.0162H66.3888ZM33.4444 57.5C51.5306 57.5 66.3888 44.7815 66.3888 29.0162H65.3888C65.3888 44.0955 51.1222 56.5 33.4444 56.5V57.5ZM0.499908 29.0162C0.499908 44.7815 15.3581 57.5 33.4444 57.5V56.5C15.7665 56.5 1.49991 44.0955 1.49991 29.0162H0.499908ZM45.8444 30.6575C45.7638 30.7502 45.3421 31.192 45.0183 31.4714L45.6714 32.2286C46.0365 31.9137 46.4917 31.437 46.599 31.3136L45.8444 30.6575ZM46.4733 29.0162C46.4733 29.596 46.266 30.1801 45.847 30.6545L46.5965 31.3165C47.1796 30.6563 47.4733 29.8357 47.4733 29.0162H46.4733ZM45.7867 27.24C46.2384 27.7443 46.4733 28.3555 46.4733 29.0162H47.4733C47.4733 28.1047 47.1445 27.2571 46.5315 26.5728L45.7867 27.24ZM45.5763 27.0484C45.6824 27.148 45.7785 27.2385 45.8325 27.285L46.4857 26.5278C46.4524 26.4991 46.3776 26.4291 46.261 26.3195L45.5763 27.0484ZM44.799 26.3395C45.0754 26.578 45.3669 26.8516 45.5763 27.0484L46.261 26.3195C46.0538 26.1249 45.7472 25.8368 45.4522 25.5823L44.799 26.3395ZM32.1878 18.9786C33.8944 19.5569 36.4129 20.807 38.8376 22.2193C41.2644 23.6328 43.5433 25.1775 44.786 26.3278L45.4653 25.594C44.1399 24.3671 41.7839 22.7781 39.3409 21.3552C36.8958 19.931 34.3097 18.6418 32.5088 18.0315L32.1878 18.9786ZM29.7302 18.3834C30.0313 18.3947 30.5023 18.4905 30.9929 18.6184C31.4726 18.7436 31.9294 18.8882 32.1831 18.977L32.5135 18.0332C32.2348 17.9356 31.752 17.783 31.2453 17.6508C30.7494 17.5215 30.1869 17.3998 29.7677 17.3841L29.7302 18.3834ZM27.974 18.7481C28.5372 18.5052 29.1274 18.3837 29.749 18.3837V17.3837C28.9926 17.3837 28.2675 17.5324 27.578 17.8298L27.974 18.7481ZM26.4712 20.184C26.7601 19.5948 27.2976 19.0753 27.9935 18.7392L27.5585 17.8387C26.6885 18.259 25.9733 18.9281 25.5733 19.7436L26.4712 20.184ZM25.9585 21.9358C25.9585 21.9628 25.9562 21.9837 25.9557 21.989C25.9547 21.9975 25.9538 22.0042 25.9533 22.0075C25.9523 22.0144 25.9514 22.0191 25.9512 22.02C25.9508 22.0222 25.9509 22.0218 25.9518 22.0172C25.9536 22.0088 25.9567 21.9945 25.9614 21.9739C25.9706 21.9333 25.9844 21.8745 26.0019 21.8019C26.0368 21.6569 26.0858 21.4604 26.1415 21.25C26.2574 20.8125 26.3885 20.3679 26.4781 20.1693L25.5664 19.7583C25.4367 20.0459 25.286 20.5739 25.1748 20.9941C25.117 21.2125 25.0662 21.4162 25.0297 21.5675C25.0115 21.6431 24.9966 21.7065 24.9861 21.7527C24.981 21.7756 24.9765 21.7958 24.9731 21.812C24.9715 21.8197 24.9696 21.8291 24.9678 21.8384C24.967 21.8428 24.9656 21.8505 24.9643 21.8595C24.9636 21.864 24.9625 21.8716 24.9615 21.8809C24.9609 21.887 24.9585 21.9084 24.9585 21.9358H25.9585ZM25.4261 28.9865C25.4261 26.134 25.6141 23.5828 25.9472 22.0415L24.9698 21.8302C24.614 23.4765 24.4261 26.1121 24.4261 28.9865H25.4261ZM25.8885 35.7354C25.6132 34.1522 25.4261 31.7003 25.4261 28.9865H24.4261C24.4261 31.7349 24.6149 34.2482 24.9033 35.9067L25.8885 35.7354ZM25.9595 36.0105C25.9389 35.9221 25.9208 35.8439 25.9068 35.7874C25.9 35.7599 25.8925 35.7308 25.8852 35.7057C25.8818 35.6942 25.8759 35.6745 25.8679 35.653C25.8641 35.6429 25.8563 35.6228 25.8443 35.599C25.8418 35.594 25.8044 35.5131 25.7225 35.4424L25.0693 36.1996C25.0433 36.1772 25.024 36.1559 25.0111 36.1402C24.9978 36.1241 24.9875 36.1097 24.9802 36.0986C24.9659 36.0771 24.9562 36.0588 24.9508 36.0481C24.9402 36.0268 24.9338 36.0101 24.9315 36.0041C24.9266 35.9909 24.9244 35.9828 24.9253 35.986C24.9265 35.9901 24.9299 36.0025 24.936 36.0273C24.9479 36.0754 24.9641 36.1453 24.9854 36.2369L25.9595 36.0105ZM26.5753 38.0205C26.4729 37.8511 26.351 37.5099 26.2325 37.0944C26.1188 36.6959 26.0233 36.2853 25.9595 36.0105L24.9854 36.2369C25.0488 36.5097 25.1494 36.9431 25.2708 37.3686C25.3873 37.7771 25.5394 38.2399 25.7197 38.5381L26.5753 38.0205ZM29.6237 39.6163C28.3359 39.6163 27.1624 38.9873 26.5749 38.0198L25.7201 38.5388C26.5106 39.8405 28.0303 40.6163 29.6237 40.6163V39.6163ZM29.749 39.6163H29.6237V40.6163H29.749V39.6163ZM32.1614 39.3599C32.1614 39.1831 32.2532 39.0695 32.274 39.0442C32.3067 39.0042 32.3381 38.9786 32.3514 38.9682C32.3801 38.9457 32.4044 38.9321 32.4101 38.9288C32.426 38.9199 32.4365 38.9154 32.4331 38.9169C32.4301 38.9183 32.4178 38.9236 32.3925 38.9334C32.3443 38.9523 32.2696 38.9799 32.1729 39.0139C31.9804 39.0814 31.712 39.1701 31.4145 39.259C30.8 39.4424 30.1304 39.6051 29.7346 39.6165L29.7633 40.616C30.3071 40.6004 31.0937 40.3984 31.7006 40.2172C32.0138 40.1236 32.2973 40.03 32.5041 39.9574C32.607 39.9213 32.6938 39.8894 32.7571 39.8646C32.7877 39.8526 32.8187 39.84 32.845 39.8281C32.8563 39.823 32.878 39.813 32.9014 39.7998C32.9109 39.7945 32.938 39.779 32.9686 39.755C32.9828 39.7439 33.015 39.7176 33.0482 39.6771C33.0694 39.6511 33.1614 39.5371 33.1614 39.3599H32.1614ZM44.8156 31.6467C43.5429 32.836 41.2889 34.353 38.9166 35.7296C36.5478 37.1041 34.1115 38.3096 32.4929 38.8891L32.83 39.8306C34.531 39.2215 37.0271 37.9822 39.4185 36.5945C41.8064 35.2089 44.1404 33.6463 45.4983 32.3774L44.8156 31.6467ZM45.0183 31.4714L44.8304 31.6335L45.4835 32.3907L45.6714 32.2286L45.0183 31.4714Z" fill="#483636" />
                                    </svg>
                                </div>
                                <div className='fast-right'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                        <path d="M1 1L14.3333 13.5L1 26V1Z" fill="white" stroke="#483636" stroke-width="2" stroke-linejoin="round" />
                                        <path d="M12.6666 1L26 13.5L12.6666 26V1Z" fill="white" stroke="#483636" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className='skip-right'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                                        <path d="M0.999969 1L24.5294 10L0.999969 19V1Z" fill="white" stroke="#483636" stroke-width="2" stroke-linejoin="round" />
                                        <path d="M24.5295 2.5V17.5" stroke="#483636" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='slide-right'>
                <div className='button1'>
                    <button className='button-expand' onClick={() => setOpen(!open)}>Expand</button>
                </div>
                <div className='music-list'>
                    <div className='music-main'>
                        <h1>Hello, {session?.user?.name}</h1>
                        <div className='main-image'>
                            <Image
                                className='home-image'
                                src='/COVER-Music.png'
                                width={903}
                                height={403}
                                alt='Image Cover Music'
                            />
                            <div className="bottom-left">Name</div>
                        </div>
                        <div className='main-trending'>
                            <div className="head-trending">
                                <div className="title-trending">
                                    <h1>Trending</h1>
                                </div>
                                <div className="see-all-trending">
                                    <a href='#'>See All</a>
                                </div>
                            </div>

                            <div className='group-trending'>
                                <div className='number-trending'>
                                   <h1>{selectedPlaylist?.name}</h1>
                                </div>
                                <div className="image-trending">
                                    image
                                </div>
                                <div className="time-trending">
                                    time
                                </div>
                                <div className="viewers-trending">
                                    viewers
                                </div>
                                <div className="action-trending">
                                    action
                                </div>

                            </div>
                        </div>
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
                            <div className='card_fav'>
                                <div className='card_fav_img'>
                                    <Image
                                        className='home-image'
                                        src='/COVER-Music.png'
                                        width={161}
                                        height={120}
                                        alt='Image Cover Music'
                                    />
                                </div>

                                <div className='card_fav_name'>
                                    {playlists.map(({ id, name }) => (
                                        <p
                                            key={id}
                                            className='cursor-pointer hover:text-white'
                                            onClick={() => {
                                                setSelectPlaylist(id)
                                            }}
                                        >
                                            {name}
                                        </p>
                                    ))}
                                </div>
                                <div className='card_fav_author'>
                                    <p>Author</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

