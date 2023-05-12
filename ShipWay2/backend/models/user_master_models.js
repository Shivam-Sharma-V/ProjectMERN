const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    }
});

const addShipment_schema = new mongoose.Schema({
    awb : String,
    name : String,
    email : String,
    orderId : String,
    stype : String,
    couriers : String,
    mobile : Number,
    country : String,
    companyname : String,
    currentDate : String
})

const addShipment_modal= mongoose.model('addShipments',addShipment_schema);
const user_model = mongoose.model('user_datas',user_schema);

module.exports = {addShipment_modal, user_model}
