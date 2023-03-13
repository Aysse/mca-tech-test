const updateLocalStorage = state => {
  window.localStorage.setItem('podcasts', JSON.stringify(state))
}

export async function fetchPodcasts () {
  const podcastsStoraged = JSON.parse(window.localStorage.getItem('podcasts')) || null
  const timestampNow = Date.now()
  const oneDay = 24 * 3600000

  if (podcastsStoraged && timestampNow - podcastsStoraged.ts < oneDay) {
    return podcastsStoraged.podcasts
  }
  try {
    const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    const data = await response.json()
    updateLocalStorage({
      podcasts: data,
      ts: timestampNow
    })
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
