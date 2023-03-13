import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PodcastListPage from './routes/podcastListPage'
import PodcastDetailPage from './routes/podcastDetailPage'
import EpisodeDetailPage from './routes/episodeDetailPage'
import ErrorPage from './error-page'
import { BiPodcast } from 'react-icons/bi'
import { FilterProvider } from './context/filters'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PodcastListPage />,
    errorElement: <ErrorPage />
  },
  {
    path: 'podcast/:podcastId',
    element: <PodcastDetailPage />
  },
  {
    path: 'podcast/:podcastId/episode/:episodeId',
    element: <EpisodeDetailPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Podcast App <BiPodcast /></h1> {/* FIXME: Put Header */}
    <FilterProvider>
      <RouterProvider router={router} />
    </FilterProvider>
  </React.StrictMode>
)
