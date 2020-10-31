
const create = (req, res) => {
    const user = req.payload
    res.json({ 'message': 'Booking creado :D', user })
}

const rate = (req, res) => {
    res.json({ 'message': 'Rate actualizado :D' })
}

module.exports = {
    create,
    rate
}