import {Service} from '../services/service';

export class OrderService {

    static async getAll() {
        return await Service.getQuery('SELECT * FROM customer_order');
    }

    static async getOneById(id) {
        return await Service.getQuery('SELECT * FROM customer_order WHERE id = ?', [id])
    }

    static async add(order) {
        return await Service.setQuery('INSERT INTO customer_order VALUES (null, ?, ?, ?, ?, current_timestamp())', [
            order.id_customer,
            order.payment_type,
            order.status,
            order.paid
        ]);
    }

    static async update(id, order) {
        return await Service.setQuery('UPDATE customer_order SET id_customer = ?, payment_type = ?, status = ?, paid = ?, date = current_timestamp() WHERE id = ?', [
            order.id_customer,
            order.payment_type,
            order.status,
            order.paid,
            id,
        ])
    }

    static async delete(id) {
        return await Service.setQuery('DELETE FROM customer_order WHERE id = ?', [id])
    }
}