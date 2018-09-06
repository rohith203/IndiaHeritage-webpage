const els = document.getElementsByClassName('nav_element');
const bgs = document.querySelectorAll('#topnav,#navbar,#bodydiv,#mid_div');
const image_divs = document.getElementsByClassName('image_div');
const body_image = document.getElementById('bodydiv');
const quote = document.getElementById('quote');
// bgs[1].style.backgroundColor = bgs[0].style.backgroundColor;

let cur_image_url = "url('images/tajmahal.jpg')";
let cur_quote_index = 0;
let quoteArr = ['Red Fort', 'Gateway of India', 'Hampi', 'Taj Mahal', 'Hawamahal', 'Qutubminar', 'Charminar', 'GoldenTemple - Amritsar'];

let changeImage = (e,i)=>{
  cur_image_url = e.target.style.backgroundImage;
  console.log(i);
  quote.innerHTML = quoteArr[i];
  body_image.style.backgroundImage = cur_image_url;
}

for(let i=0;i<image_divs.length; i++){
  image_divs[i].addEventListener('click', (e)=>changeImage(e,i));
}

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
const logoutbtn = document.getElementById('logoutbtn');
const formdiv_login = document.getElementById('formdiv_login');
const formdiv_signup = document.getElementById('formdiv_signup');
let isLoggedIn = false;
const loggedout = document.getElementById('loggedout');
const loggedin = document.getElementById('loggedin');

let changeLoginStatus = ()=>{
  switch(isLoggedIn){
    case true:
      loggedin.style.display = 'inline';
      loggedout.style.display = 'none';
      break;
    case false:
      loggedin.style.display = 'none';
      loggedout.style.display = 'inline';
    default:break;
  }
}

changeLoginStatus();  // change login status initially

let logout = (e)=>{
  isLoggedIn = false;
  changeLoginStatus();
}

let hidediv = (el)=>{
    el.style.display = "none";
    blurbg();
}

let formdisp = (el)=>{
  let form = formdiv_login;
  switch (el.target.id) {
    case 'loginbtn':
      form = formdiv_login;
      break;
    case 'signupbtn':
      form = formdiv_signup;
      break;
    default:break;
  }
  if(form.style.display!=="block"){
      form.style.display = "block";
      blurbg();
  }else{
    form.style.display = "none";
    blurbg();
  }
}

loginbtn.addEventListener('click',formdisp);
signupbtn.addEventListener('click',formdisp);
logoutbtn.addEventListener('click', logout);
