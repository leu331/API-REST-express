import { Router } from "express";
import { localMiddleware } from "../middlewares/localMiddleware";
import { globalMiddleware } from "../middlewares/globalMiddleware";
import { ProductsController } from "../controllers/ProductsController";

const productRoutes = Router()
const productsController = new ProductsController 

productRoutes.use(globalMiddleware)

productRoutes.get("/", localMiddleware, productsController.index   

) 

productRoutes.post("/",  productsController.create
  
)

export {productRoutes} 