module.exports.handlelogin = (req,res,db)=>{
  let username = req.body.username;
  let password = req.body.password;
  db.query("SELECT *FROM users WHERE username = ?", [username], (err, result, field)=>{
    if(err)console.log(err.message);
    else{
      if(result.length>0){
        if(result[0].password === password){
          res.send({
            'code':200,
            'success':'login success'
          })
        }else{
          res.send({
            'code':204,
            'success':'password does not match'
          })
        }
      }else{
        res.send({
          'code':204,
          'success':'Username does not exist'
        })
      }
    }
  })
}
