import {City} from './city.model';

// User (customer) model

export class Customer {
    constructor(id, id_city, fullname, email, phone_number, address, isAdmin){
        this.id = id;
        this.id_city = City.id;
        this.fullname = fullname;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
        this.isAdmin = isAdmin;
    }
}