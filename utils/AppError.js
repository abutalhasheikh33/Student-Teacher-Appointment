class AppError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=this.statusCode
        this.status='Fail'
        this.isOperational = true
    }
    

}

module.exports = AppError