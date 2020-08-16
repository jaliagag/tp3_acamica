import {Router} from 'express';
import {userIsAdmin} from '../middlewares/auth.middleware';

import {addUser, deleteUser, getUsers, getOneUser, updateUser} from '../controllers/user.controller';

const router = Router();

export const getU = router.get('/', userIsAdmin, async (req, res) => {
    try{
        await getUsers();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});


export const postU = router.post('/add', userIsAdmin, async (req, res) => {
    try{
        await getUsers();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});


export const getOneU = router.get('/:id', userIsAdmin, async (req, res) => {
    try{
        await getOneUser();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    }
});

export const deleteU = router.delete('/:id', userIsAdmin, async (req, res) => {
    try{
        await deleteUser();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    } 
});

export const updateU = router.put('/:id', userIsAdmin, async (req, res) => {
    try{
        await updateUser();
        res.status(200);
    } catch(error){
        res.status(500).json({error: 'Error.', message: error});
    } 
});