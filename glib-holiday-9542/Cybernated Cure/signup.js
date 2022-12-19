let data=document.querySelector("form");
let lsData=[]
data.addEventListener("submit",function(event){
event.preventDefault();
let form_data={
 mail:data.email.value,
 security:data.password.value,
}

if(form_data.mail==""||form_data.security==""){
 alert("Please fill all details!")
}
else{
 lsData.push(form_data)
 localStorage.setItem("account-data",JSON.stringify(lsData));
 data.reset();
}
window.location.assign("./login.html");

})