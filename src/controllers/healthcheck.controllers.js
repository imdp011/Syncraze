import {ApiResponse} from "../utils/api.response.js"
const healthCheck=async(req,res)=>{
    try {
        await console.log("LOGIC to connect DB");
        res.status(200).json(new ApiResponse(200,{message:"Server is running"}));
    } catch (error) {
        
    }
}


export {healthCheck}