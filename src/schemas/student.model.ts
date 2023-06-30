
import {Schema, model} from "mongoose";



interface IStudent {

    name: string;

    theoryScore: number;

    practicalScore: number;

    description: string;

    evaluate: string;

    class : object;

}



const studentSchema = new Schema<IStudent>({

    name: String,

    theoryScore: Number,

    practicalScore: Number,

    description: String,

    evaluate: String,

    class: { type: Schema.Types.ObjectId, ref: 'Class' }
})



export const Student = model<IStudent>('Student', studentSchema, 'Student');