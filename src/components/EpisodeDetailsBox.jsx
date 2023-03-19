import './EpisodeDetailsBox.css'

export function EpisodeDetailsBox ({ episode }) {
  console.log(episode)
  return (
    <div className='episode-details'>
      <h1>{episode.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: episode.description }} />
      <hr style={{ margin: '20px 0' }} />
      <audio style={{ width: '100%' }} controls>
        <source src={episode.audio?._attributes?.url} />
      </audio>
    </div>
  )
}
