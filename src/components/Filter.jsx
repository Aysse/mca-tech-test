import { useId } from 'react'
import { useFilter } from '../hooks/useFilter'
import './css/Filter.css'

export function Filter ({ numPodcasts }) {
  const { filter, setFilter } = useFilter()

  const filterId = useId()

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className='filters'>

      <div className='box'>{numPodcasts}</div>
      <div>
        <input
          id={filterId}
          type='text'
          onChange={handleChange}
          value={filter}
          placeholder='Filter podcasts...'
        />
      </div>
    </div>

  )
}
