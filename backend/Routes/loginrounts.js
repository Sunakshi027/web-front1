import express from 'express'
import {  registeruser, login, updateprofile, authCheck} from '../Controllers/loginlogic.js';
import { isAuthen } from '../middleware/isAuthenticated.js';

const router=express.Router();



router.post("/register", registeruser);
router.post("/login",login)
router.put("/updateProfile", isAuthen,updateprofile)
router.put("check",authCheck,isAuthen)
export default router;


