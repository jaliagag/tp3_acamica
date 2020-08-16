import {Router} from 'express';
import {userIsAdmin} from '../middlewares/auth.middleware';

const router = Router();

import {addOrder, deleteOrder, getOrders, getOneOrder, updateOrder} from '../controllers/order.controller';

export const getO = router.get('/', userIsAdmin, async (req, res) => {
    try{
        await getOrders();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const postO = router.post('/add', userIsAdmin, async (req, res) => {
    try{
        await addOrder();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const getOneO = router.get('/:id', userIsAdmin, async (req, res) => {
    try{
        await getOneOrder();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const deleteO = router.delete('/:id', userIsAdmin, async (req, res) => {
    try{
        await deleteOrder();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const updateO = router.put('/:id', userIsAdmin, async (req, res) => {
    try{
        await updateOrder();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});