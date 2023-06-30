import {Student} from "../schemas/student.model";
import {Class} from "../schemas/class.model";

export class Controller{
    static async showStudentList(req,res){
        const studentList = await Student.find().populate("class",{name: 1, _id: 0},Class);
        res.render("list",{studentList})
    }
    static async getAddStudent(req,res){
        const classStudent = await Class.find()
        res.render("add",{classes:classStudent})
    }
    static async postAddStudent(req,res){
        let{name,classStudent,theoryScore,practicalScore,evaluate,description} = req.body

        res.redirect("/")
    }
    static async showStudentDetail(req,res){
        const id = req.params.id
        const student = await Student.findById(id).populate("class",{name: 1, _id: 0},Class);
        res.render("detail",{student})
    }
    static async getStudentUpdate(req,res){
        const id = req.params.id
        const student = await Student.findById(id).populate("class",{name: 1, _id: 0},Class);
        const classStudent = await Class.find()
        res.render("update",{student,classes:classStudent})
    }
}