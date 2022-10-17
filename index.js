const express = require('express')
require('dotenv').config()
var cors = require('cors')
// Crear Servidor de express

const app = express()

// Directorio Publico
app.use(express.static('public'))

// Lectura y parseo del body
app.use(express.json())

app.use(cors())

// Rutas
app.use('/api', require('./routes/email'))

// Escuchar peticiones
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app
