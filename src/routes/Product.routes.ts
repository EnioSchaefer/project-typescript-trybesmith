import { Router } from 'express';
import ProductController from '../controllers/Product.controller';

const ProductRouter = Router();

const controller = new ProductController();

ProductRouter.get('/', controller.getAllProducts);
ProductRouter.post('/', controller.insertProduct);

export default ProductRouter;
