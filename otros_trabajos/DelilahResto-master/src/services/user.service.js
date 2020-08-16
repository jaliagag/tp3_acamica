import {Service} from '../services/service';

export class CustomerService {

    static async getAll() {
        return await Service.getQuery('SELECT * FROM customer');
    }

    static async getOneById(id) {
        return await Service.getQuery('SELECT * FROM customer WHERE id = ?', [id])
    }

    static async add(customer) {
        return await Service.setQuery('INSERT INTO customer VALUES (null, ?, ?, ?, ?, ?, ?)', [
            customer.id_city,
            customer.fullname,
            customer.email,
            customer.phone_number,
            customer.address,
            customer.isAdmin,
        ]);
    }

    static async update(id, customer) {
        return await Service.setQuery('UPDATE customer SET id_city = ?, fullname = ?, email = ?, phone_number = ?, address = ?, isAdmin = ? WHERE id = ?', [
            customer.id_city,
            customer.fullname,
            customer.email,
            customer.phone_number,
            customer.address,
            customer.isAdmin,  
            id,
        ])
    }

    static async delete(id) {
        return await Service.setQuery('DELETE FROM customer WHERE id = ?', [id])
    }
}