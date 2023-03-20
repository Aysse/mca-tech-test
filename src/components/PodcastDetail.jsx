import './css/PodcastDetail.css'
import { ImageBox } from './ImageBox'
import { EpisodesBox } from './EpisodesBox'

export function PodcastDetail ({ podcast }) {
  const episodes = podcast.episodes
  return (
    <div className='podcast-detail'>
      <ImageBox podcast={podcast} />
      <EpisodesBox podcast={podcast} episodes={episodes} />
    </div>
  )
}
