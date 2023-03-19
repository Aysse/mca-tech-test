import './Header.css'
import { Link, useLocation } from 'react-router-dom'

export function Header () {
  const location = useLocation()

  return (
    <div>
      <div className='header-columns'>
        <Link to='/' className='linkHome'>Podcaster</Link>
        {location.pathname === '/' && <div className='indicator' />}
      </div>
      <hr style={{ width: '100%', marginTop: '20px' }} />
    </div>
  )
}
