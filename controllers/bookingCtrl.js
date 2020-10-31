
const create = (req, res) => {
    res.json({ 'message': 'Booking creado :D' })
}

const rate = (req, res) => {
    res.json({ 'message': 'Rate actualizado :D' })
}

module.exports = {
    create,
    rate
}