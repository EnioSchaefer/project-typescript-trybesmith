import { Router } from 'express';
import OrderController from '../controllers/Order.controller';

const OrderRoutes = Router();

const controller = new OrderController();

OrderRoutes.get('/', controller.getAllOrders);

export default OrderRoutes;
