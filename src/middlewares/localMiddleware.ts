import { Request, Response, NextFunction } from "express";

export function localMiddleware (request: Request, response: Response, next:NextFunction)
{   
    console.log("Passed by local middleware!");
    return next()
} 
