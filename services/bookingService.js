
// TODO: create, update, removed

const makeRate = async (idExperience, rate, idUser) => {
    try {
        return { status: 1, rate: {} }
    } catch (error) {
        throw error
    }
}

exports.module = {
    makeRate
}