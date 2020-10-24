const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const PORT = process.env.PORT || 3000

// mongo connection
require ('./connection/mongoConnection')

const experiecesRoutes = require('./routes/experiences')
app.use('/experiences', experiecesRoutes)

const usersRoutes = require('./routes/users')
app.use('/users', usersRoutes)

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})