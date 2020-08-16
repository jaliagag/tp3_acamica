import {DetailOrderService} from '../services/order-detail.service';

//GET
export const getDetailOrders = async (req, res) => {
    try{
        const detailOrders = await DetailOrderService.getAll();
        res.status(200).json({
        data: detailOrders
    });
    } catch(error){
        console.log("Catch error: " + error);
        res.status(404).json({
            message: 'The request could not be processed.'
        });
    }
}

//GET BY ID
export const getOneDetailOrder = async (req, res) => {
    try{
        const {id} = req.params;
        const detailOrders = await DetailOrderService.getOneById(id)
        res.json({
            data: detailOrders
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
export const addDetailOrder = async (req, res) => {
    try{
        let newDetailOrders = req.body
        await DetailOrderService.add(newDetailOrders);
        
        if(newDetailOrders){
            return res.json({
                message: 'The data was added successfully.',
                data: newDetailOrders
            });
        }
    } catch(error){
        console.log("Catch error: " + error);
        res.status(500).json({
            message: 'The data could not be added.',
            data: {}
        });
    }
}

//DELETE
export const deleteDetailOrder = async (req, res) => {
    try{
        const {id} = req.params;
        const detailDeleted = DetailOrderService.delete(id);
        res.json({
            message: 'The detail order was deleted.',
            count: detailDeleted
        });
    } catch(error){
        res.status(500).json({
            message: 'The detail order could not be deleted.'
        });
    }
}

//PUT
export const updateDeletaOrder = async (req, res) => {
    try{
        const {id} = req.params;
        let detailOrderUpdated = req.body
        const detailsList = await DetailOrderService.update(id, detailOrderUpdated);
        
        if(detailsList.length > 0){
            detailsList.forEach(async details => {
                await DetailOrderService.update(detailOrderUpdated)
            });
        }
        return res.json({
            message: 'The data was updated successfully.',
            data: detailsList
        });
    } catch(error){
        res.status(500).json({
            message: 'The data could not be updated.'
        });
        console.log("Catch error: " + error);
    }
}