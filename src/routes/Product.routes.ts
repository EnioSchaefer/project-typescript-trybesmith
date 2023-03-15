import { Router } from 'express';
import ProductController from '../controllers/Product.controller';
import { validateProductName, validateProductAmount } from '../middlewares/validateProductBody';

const ProductRouter = Router();

const controller = new ProductController();

ProductRouter.get('/', controller.getAllProducts);
ProductRouter.post('/', validateProductName, validateProductAmount, controller.insertProduct);

export default ProductRouter;
