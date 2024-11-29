const express = require('express');
const router = express.Router();
const { Order, Product } = require('../models'); // Asegúrate de que estos modelos existan y estén importados correctamente

// Obtener todas las órdenes
router.get('/', async (req, res) => {
    try {
        const orders = await Order.findAll({
            include: [
                {
                    model: Product, // Asegúrate de que "Product" esté relacionado con "Order"
                    attributes: ['nombre', 'precio']
                }
            ],
            order: [['id', 'DESC']] // Ordenar por ID descendente
        });
        res.json(orders);
    } catch (error) {
        console.error('Error al obtener órdenes:', error);
        res.status(500).json({ message: 'Error al obtener órdenes', error: error.message });
    }
});

module.exports = router;
