'use client'
import { usePlaylistContext } from "../PlayListContext/page"
import Song from './Song'

const Songs = () => {
    const {playlistContextState: {selectedPlaylist} } = usePlaylistContext();

  console.log(selectedPlaylist)
    if(!selectedPlaylist){
      return null
    }
else
  return (
    <div>
      {
        selectedPlaylist.tracks.items.map((item, index) => (
            <Song key={item.track?.id }
            item={item}
            itemIndex={index}/>
        ))
      }
    </div>
  )
}

export default Songs
