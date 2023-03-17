import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { PodcastDetail } from '../components/PodcastDetail'
import { fetchPodcastDetail } from '../services/podcastDetail'

export default function PodcastDetailPage () {
  const [podcastDetail, setPodcastDetail] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const url = new URL(window.location.href)
    const pathArray = url.pathname.split('/')
    const podcastId = pathArray.pop()
    if (!podcastId) {
      console.error('There is not podcast information')
      return
    }
    fetchPodcastDetail(podcastId)
      .then(data => {
        setPodcastDetail(data)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Header />
      {podcastDetail ? <PodcastDetail podcast={podcastDetail} /> : <h1>No Podcast info</h1>}
    </div>
  )
}
