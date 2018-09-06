module.exports.register = (req,res,db)=>{
  let fullname = req.body.fullname;
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let gender = req.body.gender;
  console.log(req.body);
  let ok = true;
  db.query("SELECT *FROM users WHERE username = ? || email = ?", [username, email],(err,result)=>{
    if(err)console.log(err.message);
    else{
      if(result.length>0){
        ok = false;
        res.send({
          'code':204,
          'success':'username/email already exists'
        })
      }else{
        db.query('INSERT INTO users(fullname, username, email, password, gender) VALUES(?,?,?,?)',[fullname, username, email, password, gender], (err,result,fields)=>{
          if(err)console.log(err.message);
          else{
            if(result>0){
              res.send({"register":"successful"});
            }else{
              res.send({'register':'unsuccesful'});
            }
          }
        })
      }
    }
  })
}
