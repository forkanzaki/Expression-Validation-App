let selectedOption = document.getElementById('category')
let validation = document.getElementById('validate');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
const postRegex = /^\d{4}$/;

selectedOption.addEventListener("change",Show);
validation.addEventListener('click',validate);
let search=0;
function Show(e){
    search = selectedOption.selectedIndex;
    var x = document.getElementById("validationName");
    x.value = "";
}
function validate(e){
    var x = document.getElementById("validationName");
    if(search==0){
        alert("Select a validation format!");
    }
    if(search==1){
        if(x.value.match(emailRegex)){
            alert(`${x.value} is a valid Email !`);
        }
        else{
            alert(`${x.value} is not a valid Email !`);
        }
        
    }
    if(search==2){
        if(x.value.match(phoneRegex)){
            alert(`${x.value} is a valid Phone Number!`);
        }
        else{
            alert(`${x.value} is not a valid Phone Number !`);
        }
        
    }
    if(search==3){
        if(x.value.match(postRegex)){
            alert(`${x.value} is a valid Postal Code!`);
        }
        else{
            alert(`${x.value} is not a valid Postal Code !`);
        }
    }
    e.preventDefault();
}
console.log(search);