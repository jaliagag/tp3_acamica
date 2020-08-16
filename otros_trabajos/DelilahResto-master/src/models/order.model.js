import {Customer} from './user.model';

// Order model
export class Order {
    constructor(id, id_customer, payment_type, status, paid){
        this.id = id;
        this.id_customer = Customer.id;
        this.payment_type = payment_type;
        this.status = status;
        this.paid = paid;
    }
}