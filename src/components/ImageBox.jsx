import './ImageBox.css'

export function ImageBox ({ image, title, author, description }) {
  return (
    <div className='image-box'>
      <img src={image} alt={title} />
      <hr />
      <div className='info'>
        <div className='podcastTitle'>{title}</div>
        <div className='desc'>by {author}</div>
        <hr />
        <div className='descTitle'>Description:</div>
        <div dangerouslySetInnerHTML={{ __html: description }} className='desc' />
      </div>
    </div>
  )
}
