const model = require('../../../models')
const { genSalt, hash, compareSync, compare } = require('bcrypt')
const session = require('express-session')

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
            const userExist = await model.user.findOne({
                where: {
                    username: req.body.username
                }
            })

            if (!userExist) {
                return res.status(404).json({
                    "success": false,
                    "message": "User not found",
                    "error": null,
                    "data": null
                })
            }

            if (compareSync(req.body.password, userExist.password)) {
                req.session.user = userExist
                return res.status(200).json({
                    "success": true,
                    "error": 0,
                    "data": userExist,
                    "message": "User logged in successfully"
                })
            }
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
            const pengguna = await model.user.findOne({
                where: {
                    id: req.params.id
                }
            })

            if (!pengguna) {
                return res.status(404).json({
                    "success": false,
                    "message": "User not found",
                    "error": null,
                    "data": null
                })
            }

            return res.status(200).json({
                "success": true,
                "error": 0,
                "data": pengguna,
                "message": "User profile fetched successfully"
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
    getAllUsers: async (req, res) => {
        try {
            const users = await model.user.findAll()

            return res.status(200).json({
                "success": true,
                "error": 0,
                "data": users,
                "message": "All users fetched successfully"
            })
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