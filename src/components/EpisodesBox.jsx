import './css/EpisodesBox.css'
import { durationMapper } from '../utils/duration.mapper'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import { dateMapper } from '../utils/date.mapper'

export function EpisodesBox ({ episodes = [], podcast }) {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: {
        compare: (a, b) => a.title.localeCompare(b.title),
      },
      render: (text, { id }) => <Link to={`episode/${id}`} state={{ podcast, episode: episodes.find(ep => ep.id === id) }}>{text}</Link>
    },
    {
      title: 'Date',
      dataIndex: 'date',
      sorter: {
        compare: (a, b) => {
          const aDateStr = a.date.split('/')
          const aDateISO = `${aDateStr[2]}-${aDateStr[1]}-${aDateStr[0]}`
          const aDate = new Date(aDateISO)

          const bDateStr = b.date.split('/')
          const bDateISO = `${bDateStr[2]}-${bDateStr[1]}-${bDateStr[0]}`
          const bDate = new Date(bDateISO)

          return aDate - bDate
        }
      }
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      sorter: {
        compare: (a, b) => {
          const aTime = new Date(`1970-01-01T${a.duration}`)
          const bTime = new Date(`1970-01-01T${b.duration}`)
          return aTime - bTime
        }
      }
    }
  ]

  const data = episodes.map((episode, i) => {
    return {
      key: i,
      id: episode.id,
      title: episode.title,
      date: dateMapper(episode.date),
      duration: durationMapper(episode.duration)
    }
  })

  if (!episodes || episodes.length < 1) return (<div>No Episodes found</div>)

  return (
    <div className='episodes-box'>
      <div className='num-episodes'>Episodes: {episodes.length}</div>
      <div className='view-episodes'>
        <Table className='table-episodes' columns={columns} dataSource={data} />
      </div>
    </div>
  )
}
