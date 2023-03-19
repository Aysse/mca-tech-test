export const dateMapper = (date) => {
  if (!date) {
    console.error('Date does not exist in some episodes')
    return ''
  }

  const dateObj = new Date(date)

  const day = dateObj.getDate().toString().padStart(2, '0')
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0')
  const year = dateObj.getFullYear().toString()

  return `${day}/${month}/${year}`
}
