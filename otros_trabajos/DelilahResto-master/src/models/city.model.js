import {State} from './state.model';

// City model

export class City {
    constructor(id, city, id_state){
        this.id = id;
        this.city = city;
        id_state = State.id
    }
}