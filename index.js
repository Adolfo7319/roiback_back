const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let responseRooms = {
  dates: {
    checkin: '2022-05-22',
    checkout: '2022-05-28'
  },
  rooms: [
    {
      name: 'Doble Vista Piscina',
      boards: [
        {
          price: 352,
          name: 'solo alojamiento'
        },
        {
          price: 563,
          name: 'habitación y desayuno'
        },
        {
          price: 655,
          name: 'todo incluído'
        }
      ]
    },
    {
      name: 'Doble Vista Mar',
      boards: [
        {
          price: 366,
          name: 'solo alojamiento'
        },
        {
          price: 580,
          name: 'habitación y desayuno'
        },
        {
          price: 675,
          name: 'todo incluído'
        }
      ]
    },
  ]
}

app.get('/', (request, response) => {
  response.send('<h1>BACKEND ROIBACK ROOMS</h1>')
})

app.get('/api/rooms', (request, response) => {
  response.json(responseRooms)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port $(PORT)`)
})