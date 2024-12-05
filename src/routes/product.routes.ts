import { Router } from "express";
import { localMiddleware } from "../middlewares/localMiddleware";
import { globalMiddleware } from "../middlewares/globalMiddleware";

const productRoutes = Router() 

productRoutes.use(globalMiddleware)

productRoutes.get("/", localMiddleware, (request, response) =>{  
    const {page, limit} = request.query
    response.json({page, limit});     
}) 

productRoutes.post("/", (request, response) => { 
    const {name, price} = request.body 
    response.status(201).json({name, price, user_id: request.user_id}) 
})

export {productRoutes} 