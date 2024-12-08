import {Request, Response} from "express"
import { error } from "node:console";
import { AppError } from "../utils/AppError"; 

class ProductsController {
    
    index (request: Request, response: Response) {
        const {page, limit} = request.query
            response.json({page, limit});     
    } 

    create (request: Request, response: Response) {
        const {name, price} = request.body 
    //throw new AppError("Error created by class") 
    
    if (!name.trim()) { 
        throw new AppError("Product name is required") 
    }

    if (!price) {
        throw new AppError("Product price is required") 
    }

    if (price < 0) {
        throw new AppError("Enter a valid price for the product") 
    }

    response.status(201).json({name, price, user_id: request.user_id}) 
    }
}

export {ProductsController}