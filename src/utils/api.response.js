class ApiResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode;
        this.data=data;
        this.messag=message;
        this.success=statusCode<400;
        
    }
}


export {ApiResponse}