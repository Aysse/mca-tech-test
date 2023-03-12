import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PodcastListPage from './routes/podcastListPage'
import PodcastDetailPage from './routes/podcastDetailPage'
import EpisodeDetailPage from './routes/episodeDetailPage'
import ErrorPage from './error-page'

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
    <RouterProvider router={router} />
  </React.StrictMode>
)
