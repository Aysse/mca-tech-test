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

  if (isLoading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  const podcastsFiltered = filterPodcasts(podcasts)
  return (
    <div>
      <Header />
      <Filter numPodcasts={podcastsFiltered.length} />
      <PodcastList podcasts={podcastsFiltered} />
    </div>
  )
}

export default PodcastListPage
