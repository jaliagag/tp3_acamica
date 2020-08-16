import {Service} from '../services/service';

export class ProductService {

    static async getAll() {
        return await Service.getQuery('SELECT * FROM product');
    }

    static async getOneById(id) {
        return await Service.getQuery('SELECT * FROM product WHERE id = ?', [id]);
    }

    static async add(product) {
        return await Service.setQuery('INSERT INTO product VALUES (null, ?, ?)', [
            product.description,
            product.unit_price,
        ]);
    }

    static async update(id, product) {
        return await Service.setQuery('UPDATE product SET description = ?, unit_price = ? WHERE id = ?', [
            product.description,
            product.unit_price,  
            id,
        ]);
    }

    static async delete(id) {
        return await Service.setQuery('DELETE FROM product WHERE id = ?', [id]);
    }
}