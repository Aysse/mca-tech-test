import './ImageBox.css'

export function ImageBox ({ image, title, author, description }) {
  return (
    <div className='image-box'>
      <img src={image} alt={title} />
      <hr />
      <div className='info'>
        <p /><div className='podcastTitle'>{title}</div>
        <p /><div className='desc'>by {author}</div>
        <hr />
        <p /><div className='descTitle'>Description:</div>
        <p /><div className='desc'>{description}</div>
      </div>
    </div>
  )
}
