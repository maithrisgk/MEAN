// Model - MongoDB Schema Definition

import mongoose from 'mongoose';
const Schema=mongoose.Schema;
let Form=new Schema({
    flow:{
        type:Number
    },
    pressure:{
        type:Number
    },
    date:{
        type:String
    }
});

export default mongoose.model('Form',Form);