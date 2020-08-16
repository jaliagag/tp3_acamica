// Order detail model

export class OrderDetail {
    constructor(id, id_order, id_product, quantity, description,  subtotal){
        this.id = id;
        this.id_order = id_order;
        this.id_product = id_product;
        this.quantity = quantity;
        this.description = description;
        this.subtotal = subtotal;
    }
}