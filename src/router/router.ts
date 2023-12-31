import express from "express";
import {Controller} from "../controller/controller";
const router = express.Router();

router.get("/",(req,res)=>{
    res.redirect("/student/list")
});
router.get("/student/list",Controller.showStudentList);
router.get("/student/add",Controller.getAddStudent)
router.post("/student/add",Controller.postAddStudent)
router.get("/student/detail/:id",Controller.showStudentDetail)
router.get("/student/update/:id",Controller.getStudentUpdate)
router.post("/student/update/:id",Controller.postStudentUpdate)
router.get("/student/delete/:id",Controller.getDeleteStudent)
router.post("/student/delete/:id",Controller.postDeleteStudent)
router.get("/student/score",Controller.getScoreList)
export default router