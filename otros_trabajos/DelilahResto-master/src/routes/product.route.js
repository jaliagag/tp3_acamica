import {Router} from 'express';
import {userIsAdmin} from '../middlewares/auth.middleware';

const router = Router();

import {addProducts, getProducts, getOneProduct, deleteProduct, updateProduct} from '../controllers/product.controller';

export const postP = router.post('/add', userIsAdmin, async (req, res) => {
    try{
        await addProducts();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const getP = router.get('/', userIsAdmin, async (req, res) => {
    try{
        await getProducts();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const getOneP = router.get('/:id', userIsAdmin, async (req, res) => {
    try{
        await getOneProduct();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const deleteP = router.delete('/:id', userIsAdmin, async (req, res) => {
    try{
        await deleteProduct();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const updateP = router.put('/:id', userIsAdmin, async (req, res) => {
    try{
        await updateProduct();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});