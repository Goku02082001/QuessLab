import express  from "express";
import FormData from "../Controllers/FormData.js";
const routes =express.Router()

routes.get('/get',FormData)

export default routes