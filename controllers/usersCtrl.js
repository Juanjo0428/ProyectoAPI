
const signup = async (req, res) => {
    try {
        const user = req.body
        const response = await register(user)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const response = await auth(email, password)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    signup,
    login
}