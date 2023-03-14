import { Router } from 'express';
import ProductController from '../controllers/Product.controller';

const router = Router();

const controller = new ProductController();

router.post('/', controller.insertProduct);

export default router;
