import app from './app';
import {sequelizeConnection} from './database/database';
import User from '../src/models/user.model';

function main(){

    //Settings
    app.set('port', process.env.PORT || 3000);

    //Test DB connection
    sequelizeConnection
    .authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
        
        app.listen(app.get('port'), () => {
            console.log(`Server is running at port ${app.get('port')}`);
        })
    })
    .catch(err => console.error('Unable to connect to the database:', err));

    try{
        console.log(User === sequelizeConnection.models.User);
    } catch(e){
        console.log("model error: " + e)
    }
}

main();