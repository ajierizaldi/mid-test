const axios = require('axios');
const instance = axios.create({
    baseURL: 'https://dummyjson.com/products',
    header: { 'Content-Type': 'application/json' }
});

module.exports = {
    getAllProduct: async (req, res) => {
        try {
            const { datas } = await instance.get();
            res.status(200).json({
                "success": true,
                "error": 0,
                "data": datas,
                "message": "All products"
            });
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": error.message,
                "error": error,
                "data": null
            });
        }
    },
    getProductById: async (req, res) => {
        try {
            const { data } = await instance.get(`/${req.params.id}`);
            res.status(200).json({
                "success": true,
                "error": 0,
                "data": data,
                "message": "Product by id"
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}