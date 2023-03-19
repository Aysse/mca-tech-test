import './EpisodeDetail.css'
import { ImageBox } from './ImageBox'

export function EpisodeDetails ({ podcast, episode }) {
  console.log(episode)
  return (
    <div className='episode-detail'>
      <ImageBox podcast={podcast} />
    </div>
  )
}
