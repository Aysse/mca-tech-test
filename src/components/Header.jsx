import './css/Header.css'
import { Link } from 'react-router-dom'

export function Header ({ loading }) {
  console.log('LOADING:', loading)

  return (
    <div>
      <div className='header-columns'>
        <Link to='/' className='linkHome'>Podcaster</Link>
        {loading && <div className='indicator' />}
      </div>
      <hr style={{ width: '100%', marginTop: '20px' }} />
    </div>
  )
}
