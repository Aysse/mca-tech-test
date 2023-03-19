import { useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { EpisodeDetails } from '../components/EpisodeDetail'

export default function EpisodeDetailPage () {
  const { state } = useLocation()
  return (
    <div>
      <Header />
      <EpisodeDetails podcast={state.podcast} episode={state.episode} />
    </div>
  )
}
