const db=require('../dbs/bds');

const schma=new db.Schema({
    uname:{
        type:String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        default(){
            return 20
        }
    },
    sex:{
        type:Number,
        default(){
            return 1
        }
    },
});
module.exports=db.model('user',schma);