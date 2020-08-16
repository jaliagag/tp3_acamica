import {ProductService} from '../services/product.service';

//GET
export const getProducts = async (req, res) => {
    try{
        const products = await ProductService.getAll();
        res.status(200).json({
        data: products
    });
    } catch(error){
        console.log("Catch error: " + error);
        res.status(404).json({
            message: 'The request could not be processed.'
        });
    }
}

//GET BY ID
export const getOneProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await ProductService.getOneById(id)
        res.json({
            data: product
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
export const addProducts = async (req, res) => {
    const {description, unit_price} = req.body;
    try{
        let newProduct = await ProductService.add({
            description: description,
            unit_price: unit_price
        },{
            fields: ['description', 'unit_price']
        });
        if(newProduct){
            return res.json({
                message: 'The product was added successfully.',
                data: newProduct
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
export const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const productDeleted = ProductService.delete(id);
        res.json({
            message: 'The product was deleted.',
            count: productDeleted
        });
    } catch(error){
        res.status(500).json({
            message: 'The product could not be deleted.'
        });
    }
}

//PUT
export const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const {description, unit_price} = req.body;
        const productsList = await ProductService.update(id, {description, unit_price});

        if(productsList.length > 0){
            productsList.forEach(async prods => {
                await ProductService.update(description, unit_price)
            });
        }
        return res.json({
            message: 'The product was updated successfully.',
            data: productsList
        });
    } catch(error){
        res.status(500).json({
            message: 'The product could not be updated.'
        });
        console.log("Catch error: " + error);
    }
}