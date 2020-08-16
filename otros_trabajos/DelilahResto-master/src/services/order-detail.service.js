import {Service} from './service';

export class DetailOrderService {

    static async getAll() {
        return await Service.getQuery('SELECT * FROM order_detail');
    }

    static async getOneById(id) {
        return await Service.getQuery('SELECT * FROM order_detail WHERE id = ?', [id])
    }

    static async add(order_detail) {
        return await Service.setQuery('INSERT INTO order_detail VALUES (null, ?, ?, ?, ?, ?)', [
            order_detail.id_order,
            order_detail.id_product,
            order_detail.quantity,
            order_detail.description,
            order_detail.subtotal,
        ]);
    }

    static async update(id, order_detail) {
        return await Service.setQuery('UPDATE order_detail SET id_order = ?, id_product = ?, quantity = ?, description = ?, subtotal = ? WHERE id = ?', [
            order_detail.id_order,
            order_detail.id_product,
            order_detail.quantity,
            order_detail.description,
            order_detail.subtotal,
            id,
        ])
    }

    static async delete(id) {
        return await Service.setQuery('DELETE FROM order_detail WHERE id = ?', [id])
    }
}