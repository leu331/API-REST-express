import express, {Request, Response, NextFunction} from "express" //importei req, res e next para usar no tratamento de erros
import { routes } from "./routes" 
import { AppError } from "./utils/AppError" //importo para usar abaixo

const PORT = 3333 

const app = express() 

app.use(express.json())

app.use(routes)


app.use((error:any, request: Request, response: Response, _: NextFunction) => { 
    if (error instanceof AppError) {      
        return response.status(error.statusCode).json({message: error.message})    }
    response.status(500).json({message: "Erro no servidor"}) 
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))

