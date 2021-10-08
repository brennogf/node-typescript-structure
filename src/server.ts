import express from 'express'

process.on('SIGTERM', () => {
  process.exit()
})

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' })
})

app.listen(3001)
