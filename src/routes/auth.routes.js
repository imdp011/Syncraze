import {Router} from "express";
import { forgotPasswordRequest, getCurrentUser, LoginUser, logoutUser, refreshAccessToken, registerUser, resetForgottenPassword, verifyEmail } from "../controllers/authcontrollers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegistrationValidator,userLoginValidator, userForgetPasswordValidator,userResetPasswordValidator } from "../validators/index.js";
import isLoggedIn from "../middlewares/auth.middleware.js";
const router=Router()


router.route("/register")
.post(userRegistrationValidator(),validate,registerUser) //Factory pattern

router.get("/verify/:unHashedToken",verifyEmail)

router.get("/login",userLoginValidator(),validate,LoginUser)

router.get("/forget-password",userForgetPasswordValidator(),validate,forgotPasswordRequest)

router.get("/reset-password/:unHashedToken",userResetPasswordValidator(),validate,resetForgottenPassword)

//secured Routes

router.get("/logout",isLoggedIn,logoutUser)
router.get("/refresh-accessToken",refreshAccessToken) //generate new AT&RT
router.get("/get-profile",isLoggedIn,getCurrentUser)



export default router