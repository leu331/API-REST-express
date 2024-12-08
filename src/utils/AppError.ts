//esta classe vai servir para identificar se o erro aconteceu por parte do cliente ou do servidor
class AppError {
    message: string //vai continuar esse erro ate eu arrumar dentro do construtor
    statusCode: number

    constructor (message: string, statusCode: number = 400){
        this.message = message 
        this.statusCode = statusCode //pega a mensagem recebida dentro do parametro do construtor e passa ela para as variaveis acima

        //o this se refere as variaveis acima do construtor
               
    }
}
export {AppError}