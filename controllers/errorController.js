module.exports = (err,req,res)=>{
    let error = Object.create(err)
    error.statusCode = error.statusCode || 500
    error.status = error.status || "Fail"
    res.status(error.statusCode).json({
        status:error.status,
        error:err,
        message:error.message,
        stack:err.stack
    })
}