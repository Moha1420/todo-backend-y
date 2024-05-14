const express=require('express'); 
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser = require('body-parser');


const routes= require('./routes/ToDoRoute')
require('dotenv').config(); 

const app=express();  
app.use(express());
app.use(cors());
app.use(bodyParser.json());

 const PORT=process.env.port|| 5000;   


  mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log(`connected to MonogoDB...`))
  .catch((err)=>console.log(err)); 

app.use(routes); 
 app.listen(PORT,()=>console.log(`listening on  :${PORT}`));

