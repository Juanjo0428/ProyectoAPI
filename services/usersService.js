const UserModel = require('./../models/userModel')

const register = async (userData) => {
    try {
        const user = await UserModel(userData).save()
        return { status: 1, user }
    } catch (error) {
        throw error
    }
}

const auth = async (email, password) => {
    try {
        const user = await UserModel.findOne({ email: email, password: password })
        if (user) {
            return { status: 1, user }
        }
        throw { status: 401, message: 'Not authorized' }
    } catch (error) {
        throw error
    }
}

module.exports = {
    register,
    auth
}