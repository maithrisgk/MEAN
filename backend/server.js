// Node.js and Express with DB- Mongo

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Form from './models/form';

const app=express();
const router=express.Router();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/forms');

const connection=mongoose.connection;
connection.once('open',() => {
console.log('mongodb connection established succesfully');
});

// REST API Calls

// GET

router.route('/form').get((req,res)=>{
    Form.find({}).sort([["date",-1]]).exec((err,form)=>{ // default :: sorted by latest timestamp
// Form.find((err,form)=>{
    if(err)
    console.log(err);
    else{
        res.json(form);
        console.log('done');
    }
    
});
});

//  POST

router.route('/form').post((req,res)=>{
let form=new Form(req.body);
form.save().then(issue =>{
    res.status(200).json({'form':'Added Successfully'});
})
.catch(err =>{
    res.status(400).send('Failed to create new record');
})
.catch(err =>{
    res.status(500).send('Internal Server Error');
})
});

app.use('/',router);


app.listen(4000,() => console.log('Express server running on port 4000'));

