import { xml2json } from 'xml-js'
import { getMaxResolutionSourceImg } from '../utils/getMaxResolutionSourceImg'

const updateLocalStorage = (podcastId, state) => {
  try {
    window.localStorage.setItem(podcastId, JSON.stringify(state))
    return true
  } catch (error) {
    console.error(error)
    window.localStorage.clear()
    return false
  }
}

const getDefaultData = ({ podcasts = [], podcastId }) => {
  const podcast = podcasts.find(podcastElement => {
    const id = podcastElement?.id?.attributes['im:id']
    return id === podcastId
  })

  return {
    imageHref: getMaxResolutionSourceImg(podcast['im:image']) || null,
    author: podcast['im:artist']?.label || null,
    title: podcast['im:name']?.label || null,
    description: podcast?.summary?.label || null
  }
}

export async function fetchPodcastDetail (podcastId) {
  const podcastDetailStoraged = JSON.parse(window.localStorage.getItem(podcastId)) || null
  const timestampNow = Date.now()
  const oneDay = 24 * 3600000

  if (podcastDetailStoraged && timestampNow - podcastDetailStoraged.ts < oneDay) {
    return podcastDetailStoraged.podcastDetails
  }

  try {
    const data = await fetch(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${podcastId}`)
      .then(response => {
        if (response.ok) return response.json()
        console.error('Network response was not ok.')
      })
      .catch(error => console.error(error))

    let podcastDetails = null
    if (data?.resultCount === 1) {
      podcastDetails = await fetch(`https://cors-anywhere.herokuapp.com/${data.results[0].feedUrl}`)
        .then(response => {
          if (response.ok) return response.text()
          console.error('Network response was not ok.')
        })
        .then(result => {
          const jsonResult = xml2json(result, { compact: true, spaces: 4 })
          return JSON.parse(jsonResult)
        })
        .catch(error => console.error(error))
    }

    if (podcastDetails) {
      const podcastDetailsChannel = podcastDetails.rss.channel
      const episodes = podcastDetailsChannel.item
      const episodesMapped = episodes.map((episode, i) => {
        return {
          id: episode.guid?._text || i,
          title: episode.title?._text,
          date: episode.pubDate?._text,
          description: episode.description?._cdata,
          audio: episode.enclosure,
          duration: episode['itunes:duration']
        }
      })

      const podcasts = JSON.parse(window.localStorage.getItem('podcasts'))

      const podcastDetailsMapped = {
        id: podcastId,
        title: podcastDetailsChannel.title?._text,
        summary: podcastDetailsChannel['itunes:summary']?._cdata,
        image: {
          href: data.results[0].artworkUrl100,
          title: podcastDetailsChannel.image?.title?._text
        },
        imageSecondary: {
          href: podcastDetailsChannel.image?.url?._text,
          title: podcastDetailsChannel.image?.title?._text
        },
        author: podcastDetailsChannel['itunes:author']?._text,
        itunesImage: {
          href: podcastDetailsChannel['itunes:image']?.href,
          title: podcastDetailsChannel.title?._text
        },
        description: podcastDetailsChannel.description?._cdata,
        episodes: episodesMapped,
        defaultData: getDefaultData({ podcasts: podcasts?.podcasts?.feed.entry, podcastId })
      }

      const isUpdated = updateLocalStorage(podcastId, {
        podcastDetails: podcastDetailsMapped,
        ts: timestampNow
      })
      return isUpdated ? podcastDetailsMapped : null
    }
    return null
  } catch (error) {
    console.error(error)
    throw error
  }
}
