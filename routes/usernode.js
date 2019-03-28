const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const Usermoudelte=require("../usermoudele/usermoudele");
// 注册操作
router.post('/regiter',(req,res)=>{
    let uname=req.body.uname;
    let pwd=req.body.pwd;

    bcrypt.hash(pwd, 10).then(saltPassword => {
    let user=new Usermoudelte({
        uname:uname,
        pwd:saltPassword
    });
    // console.log(saltPassword);
   
    user
    .save()
    .then(() => {
      console.log('注册成功');
    res.redirect('/login.html');
    })
    .catch(error => {
      res.send({
        code: -1,
        msg: '网络异常，请稍后重试'
      })
    })
});
//登录操作

router.post('/login',(req,res)=>{
    console.log(1)
    let uname=req.body.uname;
    let pwd=req.body.pwd;
    Usermoudelte.findOne({uname})
    .then(data=>{
       if(!data){
           res.send({
               code:-1,
               msg:"用户不存在"
           })
           console.log("用户不存在");
       }else{
        bcrypt.compare(pwd,data.pwd,(err,isOk)=>{
            // console.log(pwd)
            // console.log(data.pwd)
            if(isOk){
                res.redirect('/');
            }else{
               
                res.send({
                    code:0,
                    msg:"密码错误"
                }) 
            }
        })
       }
    })   
})

});


module.exports=router;