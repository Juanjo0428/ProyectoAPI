const ExperienceModel = require('./../models/experienceModel')

const getAll = async () => {
    try {
        const experiences = await ExperienceModel.find()
        return { status: 1, 'list': experiences }
    } catch (error) {
        throw error
    }
}

const findById = async (id) => {
    try {
        const experience = await ExperienceModel.findById(id)
        return { status: 1, experience }
    } catch (error) {
        throw error
    }
}

const getRanking = async () => {
    try {
        const ranking = await ExperienceModel.find().sort({ score: 'desc' }).limit(5)
        return { status: 1, ranking }
    } catch (error) {
        throw error
    }
}

const insert = async (experienceData) => {
    try {
        const experience = await ExperienceModel(experienceData).save()
        return { status: 1, experience }
    } catch (error) {
        throw(error)
    }
}


module.exports = {
    getAll,
    findById,
    getRanking,
    insert
}