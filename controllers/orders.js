const { response, request } = require('express');

const ordersGet = async(req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    res.json({
        msg: 'get Api - ordersGet'
    });
}

const ordersPut = async(req = request, res = response) => {
    const {id} = req.params;
    res.json({
        msg: 'Put Api - ordersPut',
        id
    });
}

const ordersPost = async(req = request, res = response) => {
    const {nombre,edad} = req.body;
    res.json({
        msg: 'Post Api - ordersPost',
        nombre,
        edad
    });
}

const ordersDelete = async(req = request, res = response) => {
    res.json({
        msg: 'Delete Api - ordersDelete'
    });
}

module.exports = {
    ordersGet,
    ordersPost,
    ordersPut,
    ordersDelete,
}