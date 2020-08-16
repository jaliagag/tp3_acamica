import {Router} from 'express';
import {userIsAdmin} from '../middlewares/auth.middleware';

const router = Router();

import {addDetailOrder, deleteDetailOrder, getDetailOrders, getOneDetailOrder, updateDeletaOrder} from '../controllers/order-detail.controller';

export const postD = router.post('/add', userIsAdmin, async (req, res) => {
    try{
        await addDetailOrder();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const getD = router.get('/', userIsAdmin, async (req, res) => {
    try{
        await getDetailOrders();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const getOneD = router.get('/:id', userIsAdmin, async (req, res) => {
    try{
        await getOneDetailOrder();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const deleteD = router.delete('/:id', userIsAdmin, async (req, res) => {
    try{
        await deleteDetailOrder();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const updateD = router.put('/:id', userIsAdmin, async (req, res) => {
    try{
        await updateDeletaOrder();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});