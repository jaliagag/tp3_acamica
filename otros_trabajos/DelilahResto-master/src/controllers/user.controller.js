import {CustomerService} from '../services/user.service';
import {Customer} from '../models/user.model';

//GET
export const getUsers = async (req, res) => {
    try{
        const users = await CustomerService.getAll();
        res.status(200).json({
        data: users
    });
    } catch(error){
        console.log("Catch error: " + error);
        res.status(404).json({
            message: 'The request could not be processed.'
        });
    }
}

//GET BY ID
export const getOneUser = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await CustomerService.getOneById(id)
        res.json({
            data: user
        });
    } catch(error){
        console.log(error)
        res.status(404).json({
            message: 'The request could not be processed.',
            data: {}
        });
    }
}

//POST
export const addUser = async (req, res) => {
    try{
        let newUser = req.body
        await CustomerService.add(newUser);
        
        if(newUser){
            return res.json({
                message: 'The product was added successfully.',
                data: newUser
            });
        }
    } catch(error){
        console.log("Catch error: " + error);
        res.status(500).json({
            message: 'The user could not be added.',
            data: {}
        });
    }
}

//DELETE
export const deleteUser = async (req, res) => {
    try{
        const {id} = req.params;
        const userDeleted = CustomerService.delete(id);
        res.json({
            message: 'The user was deleted.',
            count: userDeleted
        });
    } catch(error){
        res.status(500).json({
            message: 'The user could not be deleted.'
        });
    }
}

//PUT
export const updateUser = async (req, res) => {
    try{
        const {id} = req.params;
        let userUpdated = req.body
        const usersList = await CustomerService.update(id, userUpdated);
        
        if(usersList.length > 0){
            usersList.forEach(async users => {
                await CustomerService.update(userUpdated)
            });
        }
        return res.json({
            message: 'The user was updated successfully.',
            data: usersList
        });
    } catch(error){
        res.status(500).json({
            message: 'The user could not be updated.'
        });
        console.log("Catch error: " + error);
    }
}