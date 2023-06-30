import {Schema, model} from "mongoose";

interface IClass {

    name: string

}

const classSchema = new Schema<IClass>({

    name: String

})

export const Class = model<IClass>('Class', classSchema, 'Class');