const els = document.getElementsByClassName('nav_element');
const bgs = document.querySelectorAll('#topnav,#navbar,#bodydiv,#mid_div');
bgs[1].style.backgroundColor = bgs[0].style.backgroundColor;


let blurbg = () => {
    for(let i=0; i<bgs.length; i++){
      if(bgs[i].style.filter === 'blur(4px)'){
        bgs[i].style.filter = 'blur(0px)';
      }else{
        bgs[i].style.filter = 'blur(4px)';
      }
    }
}

const loginbtn = document.getElementById('loginbtn');
const signupbtn = document.getElementById('signupbtn');
const formdiv_login = document.getElementById('formdiv_login');
const formdiv_signup = document.getElementById('formdiv_signup');

let hidediv = (el)=>{
    el.style.display = "none";
    blurbg();
}

loginbtn.addEventListener('click', ()=>{

  if(formdiv_login.style.display!=="block"){
      formdiv_login.style.display = "block";
      blurbg();
  }else{
    formdiv_login.style.display = "none";
    blurbg();
  }

})

signupbtn.addEventListener('click', ()=>{

  if(formdiv_signup.style.display!=="block"){
      formdiv_signup.style.display = "block";
      blurbg();
  }else{
    formdiv_signup.style.display = "none";
    blurbg();
  }

})
