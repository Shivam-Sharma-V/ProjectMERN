const express =require("express");
const cors =require('cors');
const Schema= require('./models/user_master_models.js');
require('./databases/connection.js');
const app =  express();
const port =process.env.PORT||8080;
app.use(express.json());
app.use(cors());

app.post('/addshipment',async(req,resp)=>{
  let addShipment = new Schema.addShipment_modal(req.body)
    let result = await addShipment.save();
    result = result.toObject();
    resp.send(result);
})

app.get('/getshipment',async(req,resp)=>{
  let result = await Schema.addShipment_modal.find();
  resp.send(result);
  
})

// app.get('/search/:key',async(req,res)=>{
//  console.log(req.query);
//   let result = await Schema.addShipment_modal.find({
//          "$or":[
//           {orderId: {$regex : req.params.key}},
//           {awb: {$regex : req.params.key}},
//           {couriers: {$regex : req.params.key}}
//          ]
         
//   })
//   res.send(result)
// })

app.post('/login',async(req,res)=>{
    const email= req.body.email;
    // const username = req.body.email
    const password =req.body.password;
    console.log(password,email)
    
    let user = await Schema.user_model.findOne({email:email}).select("-password")
    // console.log(user.password)
    if (user) {
      if (user.email==email ) {
        res.send({
          message: 'login successful',
          status: 200
        });
        // res.redirect('/dashboard')
      }else{
        res.send({
          message:'invalid email and password',
          status:400
        });
      }
    }else{
      res.send({
        message:"Please register",
        status:204
      })
    }
})


app.listen(port, () => {
    console.log("Server is running on port " + port);
  });