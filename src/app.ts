import express from 'express';
import LoginRouter from './routes/Login.routes';
import OrderRoutes from './routes/Order.routes';
import ProductRouter from './routes/Product.routes';
import UserRouter from './routes/User.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);
app.use('/orders', OrderRoutes);
app.use('/login', LoginRouter);
app.use('/users', UserRouter);

export default app;
