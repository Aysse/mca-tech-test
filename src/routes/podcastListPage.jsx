import React, { useEffect, useState } from 'react'
import { PodcastList } from '../components/PodcastList'
import { fetchPodcasts } from '../services/podcasts'
import { useFilter } from '../hooks/useFilter'
import { Filter } from '../components/Filter'
import { Header } from '../components/Header'

function PodcastListPage () {
  const { filter, filterPodcasts } = useFilter()
  const [podcasts, setPodcasts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPodcasts()
      .then(data => {
        setPodcasts(data.feed.entry)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error)
        setIsLoading(false)
      })
  }, [filter])

  const podcastsFiltered = filterPodcasts(podcasts)
  return (
    <div>
      <Header loading={isLoading} />
      {error
        ? <div>{error.message}</div>
        : <><Filter numPodcasts={podcastsFiltered.length} /><PodcastList podcasts={podcastsFiltered} /></>}
    </div>
  )
}

export default PodcastListPage
