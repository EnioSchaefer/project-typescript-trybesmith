import { Router } from 'express';
import OrderController from '../controllers/Order.controller';
import authorizeToken from '../middlewares/auth/authorizeToken';
import validateProductsIds from '../middlewares/validateProductsIds';

const OrderRoutes = Router();

const controller = new OrderController();

OrderRoutes.get('/', controller.getAllOrders);
OrderRoutes.post('/', authorizeToken, validateProductsIds, controller.insertOrders);

export default OrderRoutes;
