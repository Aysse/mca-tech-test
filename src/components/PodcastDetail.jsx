import './PodcastDetail.css'
import { ImageBox } from './ImageBox'
import { EpisodesBox } from './EpisodesBox'

export function PodcastDetail ({ podcast }) {
  const { defaultData } = podcast
  const image = podcast.imageSecondary?.href || defaultData.imageHref
  const title = podcast.title || defaultData.title
  const author = podcast.author || defaultData.author
  const description = podcast.description || podcast.summary || defaultData.description
  const episodes = podcast.episodes
  return (
    <div className='podcast-detail'>
      <ImageBox image={image} title={title} author={author} description={description} />
      <EpisodesBox episodes={episodes} />
    </div>
  )
}
