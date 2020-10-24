const { getAll, findById, getRanking, insert } = require('./../services/experienceService')

const all = (req, res) => {
    const response = getAll()
    res.json(response)
}

const detail = (req, res) => { //experience/detail/6
    try {
        const id = Number(req.params.id)
        const response = findById(id)
        res.json(response)
    } catch (err) {
        res.status(404).send(err)
    }    
}

const ranking = (req, res) => {
    const response = getRanking()
    res.json(response)
}

const create = (req, res) => {
    const experienceData = req.body
    const response = insert(experienceData)
    res.json(response)
}

module.exports = {
    all,
    detail,
    ranking,
    rate,
    create
}


