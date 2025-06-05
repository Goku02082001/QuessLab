import express from "express";
import fromController from "../Controllers/FormController.js";
const routes=express.Router()

routes.post('/post',fromController)
export default routes