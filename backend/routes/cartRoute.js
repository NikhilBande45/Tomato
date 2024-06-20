import express from 'express'
import { addToCart , removeFormCart , getCart} from '../controllers/cartController.js'
import authMiddleware from '../middleware/Auth.js'
const cartRouter = express.Router();

cartRouter.post('/add' , authMiddleware , addToCart);
cartRouter.post('/remove' , authMiddleware , removeFormCart);
cartRouter.get('/get' , authMiddleware , getCart);

export default cartRouter;

