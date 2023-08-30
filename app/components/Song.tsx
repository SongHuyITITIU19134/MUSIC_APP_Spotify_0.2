import Image from "next/image"
import style from './song.module.css'

interface Props {
    item: SpotifyApi.PlaylistTrackObject
    itemIndex: number
 
}

const Song = ({ item:{track}, itemIndex }: Props) => {
    
    return (
        <div className={style.cover_fav}>
        <div className='group-trending'>
            <div className='number-trending'>
            <p className="text-trending-number">
  {itemIndex < 10 ? '0' + itemIndex : itemIndex + 1}
</p>
            </div>
            <div className="image-trending ">
                <Image src={track?.album.images[0].url || ''}
                alt='Image'
                width={85}
                height={80}
                className="image_property"
                 />
                 <div className="infor_cover">
                 <div><p className="infor">{track?.name}</p></div>
                 <div><p className="infor property"> {track?.artists[0].name}</p></div>
                 </div>
                 
            </div>
            <div className="time-trending">
               {track?.duration_ms ?
               Math.floor(track?.duration_ms / 60000).toString().padStart(2, '0') + ":" +
               (Math.floor((track?.duration_ms % 60000) / 1000 ) >10
               ? Math.floor((track?.duration_ms % 60000) / 1000 ):
                Math.floor((track?.duration_ms % 60000) / 1000 ) + "0")
                : 'Time null' }
            </div>
            <div className="viewers-trending">
          {track?.popularity}
            </div>
            <div className="action-trending">
                action
            </div>
        </div>
        </div>

    )
}

export default Song
