import { Request, Response, NextFunction } from "express";
import { randomUUID, UUID } from "node:crypto";

export function globalMiddleware (request: Request, response: Response, next:NextFunction)
{           
    request.user_id = randomUUID()
    request.product_id = randomUUID()

    console.log("Passed by middleware!");
    return next()
} 
