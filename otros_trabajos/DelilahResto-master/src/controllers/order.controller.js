import {OrderService} from '../services/order.service';

//GET
export const getOrders = async (req, res) => {
    try{
        const orders = await OrderService.getAll();
        res.status(200).json({
        data: orders
    });
    } catch(error){
        console.log("Catch error: " + error);
        res.status(404).json({
            message: 'The request could not be processed.'
        });
    }
}

//GET BY ID
export const getOneOrder = async (req, res) => {
    try{
        const {id} = req.params;
        const order = await OrderService.getOneById(id)
        res.json({
            data: order
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
export const addOrder = async (req, res) => {
    try{
        let newOrder = req.body
        console.log(newOrder)
        await OrderService.add(newOrder);
        
        if(newOrder){
            return res.json({
                message: 'The order was added successfully.',
                data: newOrder
            });
        }
    } catch(error){
        console.log("Catch error: " + error);
        res.status(500).json({
            message: 'The order could not be added.',
            data: {}
        });
    }
}

//DELETE
export const deleteOrder = async (req, res) => {
    try{
        const {id} = req.params;
        const orderDeleted = OrderService.delete(id);
        res.json({
            message: 'The order was deleted.',
            count: orderDeleted
        });
    } catch(error){
        console.log(error);
        res.status(500).json({
            message: 'The order could not be deleted.'
        });
    }
}

//PUT
export const updateOrder = async (req, res) => {
    try{
        const {id} = req.params;
        let orderUpdated = req.body
        const orderList = await OrderService.update(id, orderUpdated);
        
        if(orderList.length > 0){
            orderList.forEach(async orders => {
                await OrderService.update(orderUpdated)
            });
        }
        return res.json({
            message: 'The order was updated successfully.',
            data: orderList
        });
    } catch(error){
        res.status(500).json({
            message: 'The order could not be updated.'
        });
        console.log("Catch error: " + error);
    }
}