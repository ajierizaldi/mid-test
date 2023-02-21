const model = require('../../../models')
const { genSalt, hash, compareSync } = require('bcrypt')

const cryptPassword = async (password) => {
    const salt = await genSalt(12)
    return hash(password, salt)
}

module.exports = {
    register: async (req, res) => {
        try {
            const data = await model.user.create({
                ...req.body,
                password: await cryptPassword(req.body.password)
            })
            return res.status(200).json({
                "success": true,
                "error": 0,
                "data": data,
                "message": "User created successfully"
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "message": error.message,
                "error": error,
                "data": null
            })
        }
    },
    login: async (req, res) => {
        try {

        } catch (error) {
            return res.status(500).json({
                "success": false,
                "message": error.message,
                "error": error,
                "data": null
            })
        }
    },
    getProfile: async (req, res) => {
        try {

        } catch (error) {
            return res.status(500).json({
                "success": false,
                "message": error.message,
                "error": error,
                "data": null
            })
        }
    }
}