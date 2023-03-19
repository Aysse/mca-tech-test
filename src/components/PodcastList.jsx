import './css/PodcastList.css'
import { Link } from 'react-router-dom'
import { getMaxResolutionSourceImg } from '../utils/getMaxResolutionSourceImg'

export function PodcastList ({ podcasts }) {
  return (
    <main className='podcasts'>
      <ul>
        {podcasts.map(podcast => (
          <li key={podcast.id.attributes['im:id']}>
            <Link to={`podcast/${podcast.id.attributes['im:id']}`}>
              <img src={getMaxResolutionSourceImg(podcast['im:image'])} alt={podcast['im:name'].label} />
              <div className='title'>{podcast['im:name'].label}</div>
              <div className='authorName'>Author: {podcast['im:artist'].label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
