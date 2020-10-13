const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const PORT = process.env.PORT || 3000

const experiecesRoutes = require('./routes/experiences')
app.use('/experiences', experiecesRoutes)

// localhost:5000/experiences/ranking
// localhost:5000/experiences/rate

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})