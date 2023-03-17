import { Link } from 'react-router-dom'
import './Header.css'

export function Header () {
  return (
    <div>
      <Link to='/' className='linkHome'>Podcaster</Link>
      <hr style={{ width: '100%', marginTop: '20px' }} />
    </div>
  )
}
