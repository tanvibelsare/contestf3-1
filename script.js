let Name=document.getElementById("name");
let Profession=document.getElementById("profession");
let Age=document.getElementById("age");
let massage=document.getElementById("msg")
let button=document.getElementById("btn")
button.addEventListener("click",addEmployee)
console.log(Name.value)
function addEmployee(){
if((Name.value=="")||(Profession.value=="")||(Profession.value=="")){
    massage.style.color="red"
 massage.textContent="Error : Please Make sure All the fields are filled before adding in an employee !"
}else{
    massage.style.color="green"
    massage.textContent="Success : Employee Added!"
}
}