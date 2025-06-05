import express from "express";
import formSchema from "../models/FormModel.js";

const FormData=async(req,res)=>{
try {
    const data=await formSchema.find()
    res.status(200).json({message:"Your data get SuccessFully ",data})
} catch (error) {
    res.status(400).json({message:"Somthing went wrong",error:error.message})
}

}

export default FormData