import { useContext } from 'react'
import { FilterContext } from '../context/filters'

export function useFilter () {
  const filterObj = useContext(FilterContext)

  const { filter, setFilter } = filterObj

  const filterPodcasts = (podcasts) => {
    if (filter) {
      return podcasts.filter(podcast => {
        return (
          podcast['im:name'].label.toLowerCase().includes(filter) || podcast['im:artist'].label.toLowerCase().includes(filter)
        )
      })
    }
    return podcasts
  }

  return { filter, setFilter, filterPodcasts }
}
