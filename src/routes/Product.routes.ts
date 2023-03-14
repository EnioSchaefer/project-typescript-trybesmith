import { Router } from 'express';
import ProductController from '../controllers/Product.controller';

const router = Router();

const controller = new ProductController();

router.get('/', controller.getAllProducts);
router.post('/', controller.insertProduct);

export default router;
