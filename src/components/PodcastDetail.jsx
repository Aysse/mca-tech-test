import './PodcastDetail.css'
import { ImageBox } from './ImageBox'

export function PodcastDetail ({ podcast }) {
  const { defaultData } = podcast
  const image = podcast.imageSecondary?.href || defaultData.imageHref
  const title = podcast.title || defaultData.title
  const author = podcast.author || defaultData.author
  const description = podcast.description || podcast.summary || defaultData.description
  return (
    <ImageBox image={image} title={title} author={author} description={description} />
    // <EpisodesBox ></EpisodesBox>
  )
}
