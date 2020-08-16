import express, {json} from 'express';
import morgan from 'morgan';

import {router} from './routes/login.route';
import {verifyToken} from './middlewares/token.middleware';

// Product
import {getP, postP, getOneP, deleteP, updateP} from './routes/product.route';

// User
import {getU, postU, getOneU, deleteU, updateU} from './routes/user.route';

// Order
import {getO, postO, getOneO, deleteO, updateO} from './routes/order.route';

// Detail Order
import {deleteD, getD, getOneD, postD, updateD} from './routes/order-detail.route';

// Inizialization
const app = express();

// Middlewares
app.use(morgan('dev')); // It shows in console the requests made from Insomnia
app.use(json()); // It understands json files
app.use('/login', router); /*http://localhost:3000/api/login*/ //GET
app.use(verifyToken);

// Product Routes
app.use('/api/products', getP); /*http://localhost:3000/api/products*/
app.use('/api/products', postP); /*http://localhost:3000/api/products/add*/
app.use('/api/products', getOneP); /*http://localhost:3000/api/products/id*/
app.use('/api/products', deleteP); /*http://localhost:3000/api/products/id*/
app.use('/api/products', updateP); /*http://localhost:3000/api/products/id*/

// User Routes
app.use('/api/users', getU) /*http://localhost:3000/api/users/*/
app.use('/api/users', postU) /*http://localhost:3000/api/users/add*/
app.use('/api/users', getOneU) /*http://localhost:3000/api/users/id*/
app.use('/api/users', deleteU) /*http://localhost:3000/api/users/id*/
app.use('/api/users', updateU) /*http://localhost:3000/api/users/id*/

// Order Routes
app.use('/api/orders', getO) /*http://localhost:3000/api/orders/*/
app.use('/api/orders', postO) /*http://localhost:3000/api/orders/add*/
app.use('/api/orders', getOneO) /*http://localhost:3000/api/orders/id*/
app.use('/api/orders', deleteO) /*http://localhost:3000/api/orders/id*/
app.use('/api/orders', updateO) /*http://localhost:3000/api/orders/id*/

// Detail Order Routes
app.use('/api/details', getD) /*http://localhost:3000/api/details/*/
app.use('/api/details', postD) /*http://localhost:3000/api/details/add*/
app.use('/api/details', getOneD) /*http://localhost:3000/api/details/id*/
app.use('/api/details', deleteD) /*http://localhost:3000/api/details/id*/
app.use('/api/details', updateD) /*http://localhost:3000/api/details/id*/

export default app;