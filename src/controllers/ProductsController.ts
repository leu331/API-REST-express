import {Request, Response} from "express"
import { error } from "node:console";
import { AppError } from "../utils/AppError"; 
import { number, z } from "zod"

class ProductsController {
    
    index (request: Request, response: Response) {
        const {page, limit} = request.query
            response.json({page, limit});     
    } 

    create (request: Request, response: Response) {
        // const {name, price} = request.body 
    //throw new AppError("Error created by class") 

    const bodySchema = z.object({
        name: z.string({required_error: "Name is required"}), 

        price: number({required_error: "Price is required"}).positive({message: "Price must be positive"}), 

        quantity: number().min(1, {message: "quantity must be at least 1 unit"}).positive({message: "Quantity must be positive"}) 
    })

    const {name, price, quantity} = bodySchema.parse(request.body) 
    
    
    // if (!name.trim()) { 
    //     throw new AppError("Product name is required") 
    // }

    // if (!price) {
    //     throw new AppError("Product price is required") 
    // }

    // if (price < 0) {
    //     throw new AppError("Enter a valid price for the product") 
    // }

    response.status(201).json({name, price, quantity, user_id: request.user_id, product_id: request.product_id }) 
    }
}

export {ProductsController}