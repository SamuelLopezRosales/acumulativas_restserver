const {Router} = require('express');

const { ordersGet,
    ordersPut,
    ordersPost,
    ordersDelete } = require('../controllers/orders');

const router = Router();

router.get('/',ordersGet);

router.put('/:id',ordersPut);

router.post('/',ordersPost);

router.delete('/',ordersDelete);

module.exports = router;