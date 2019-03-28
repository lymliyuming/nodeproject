const express=require('express');
const router=express.Router();
//根据cookie判断登录是否
router.get('/',(req,res)=>{
      console.log(req.cookies.goods);
    // res.send("1")
    if(req.cookies.goods){
        res.render('index',{
            goods:req.cookies.goods, 
        });
    }else{
        res.redirect('/login.html');
    }
})
router.get('/login.html', (req, res) => {
    res.render('login');
  })
  
router.get('/register.html', (req, res) => {
    res.render('regiter');
  })
module.exports=router;



