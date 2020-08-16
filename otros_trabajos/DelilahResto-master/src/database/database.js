import Sequelize from 'sequelize';

//DB options
let opts = {
    define: {
        //prevents sequelize from pluralizing table names
        freezeTableName: true,
        timestamps: false
    }
};

//DB connection
export const sequelizeConnection = new Sequelize('mariadb://root@localhost:3306/delilahresto', opts);



//City.belongsTo(State, {as: 'state', foreignKey: 'id_state'});
//State.hasMany(City, {as: 'city'});

//City.belongsTo(State, 'state');

// Object.keys(db).forEach(modelName => {
//     if(db[modelName].associate) {
//         db[modelName].associate(db);
//     };
// });

// db.sequelizeConnection = sequelizeConnection;
// db.Sequelize = Sequelize;

// export default db;





// const db = {};

// db.Sequelize = Sequelize;
// db.sequelizeConnection = sequelizeConnection;

// import {State} from '../models/state.model';
// import {City} from '../models/city.model';
// import {User} from '../models/user.model';

// db.sequelizeConnection.State.hasMany(db.sequelizeConnection.City, {as: 'city'});
// db.sequelizeConnection.City.belongsTo(db.sequelizeConnection.State, {foreignKey: 'id_state', as:'state' });

// db.sequelizeConnection.City.hasMany(db.sequelizeConnection.User, {as: 'user'});
// db.sequelizeConnection.User.belongsTo(db.sequelizeConnection.City, {foreignKey: 'id_city', as:'city' });