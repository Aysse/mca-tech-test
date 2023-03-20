import './css/ImageBox.css'

export function ImageBox ({ podcast }) {
  const { defaultData } = podcast
  const image = podcast.imageSecondary?.href || defaultData.imageHref
  const title = podcast.title || defaultData.title
  const author = podcast.author || defaultData.author
  const description = podcast.description || podcast.summary || defaultData.description
  return (
    <div className='image-box'>
      <img src={image} alt={title} />
      <hr />
      <div>
        <div className='podcastTitle'>{title}</div>
        <div className='desc'>by {author}</div>
        <hr />
        <div className='descTitle'>Description:</div>
        <div dangerouslySetInnerHTML={{ __html: description }} className='desc' />
      </div>
    </div>
  )
}
