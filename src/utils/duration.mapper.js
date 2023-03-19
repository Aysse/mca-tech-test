export const durationMapper = (duration) => {
  if (!duration || !duration._text) {
    console.error('Duration does not exist in some episodes')
    return '--:--'
  }

  const hour = Math.floor(parseInt(duration._text) / 3600)
  const remainingSec = parseInt(duration._text) % 3600
  const min = Math.floor(remainingSec / 60)
  const sec = remainingSec % 60

  const dateFormat = new Date()
  dateFormat.setHours(hour)
  dateFormat.setMinutes(min)
  dateFormat.setSeconds(sec)

  const hourStr = `${dateFormat.getHours().toString().padStart(2, '0')}`
  const minStr = `${dateFormat.getMinutes().toString().padStart(2, '0')}`
  const secStr = `${dateFormat.getSeconds().toString().padStart(2, '0')}`

  return `${hourStr}:${minStr}:${secStr}`
}
