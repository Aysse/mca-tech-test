import './css/EpisodeDetail.css'
import { ImageBox } from './ImageBox'
import { EpisodeDetailsBox } from './EpisodeDetailsBox'

export function EpisodeDetails ({ podcast, episode }) {
  console.log(episode)
  return (
    <div className='episode-detail'>
      <ImageBox podcast={podcast} />
      <EpisodeDetailsBox episode={episode} />
    </div>
  )
}
