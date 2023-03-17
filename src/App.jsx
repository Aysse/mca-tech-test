import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PodcastListPage from './routes/podcastListPage'
import PodcastDetailPage from './routes/podcastDetailPage'
import EpisodeDetailPage from './routes/episodeDetailPage'
import ErrorPage from './error-page'

const App = () => {
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
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
