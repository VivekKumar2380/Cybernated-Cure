let login= JSON.parse(localStorage.getItem("account-data"))
       
let login_form=document.querySelector("form");
login_form.addEventListener("submit",function(event){
  event.preventDefault();
  let eMail=document.querySelector("#email").value;
  let pass=document.querySelector("#password").value;
  login.forEach(el => {
    if(eMail!=el.mail){
      //  alert("User Mail Not Registred")
  }
  else{
    if(pass!=el.security){
     alert("Wrong credentials")
    }
    else{
     alert("Sign in Successful")
      login_form.reset();
      window.location.assign("./index.html");
    }
  }
  
  });
 
})