import express from "express";
import {Controller} from "../controller/controller";
const router = express.Router();

router.get("/",(req,res)=>{
    res.json({message: "buttseks"})
})

export default router