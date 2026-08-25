let name=document.querySelector("#name");
let age=document.querySelector("#age");
let job=document.querySelector("#job");
let submit=document.querySelector("#submit");

submit.addEventListener("click",function(){
    if(name.value== ""||age.value== ""||job.value== ""){
        alert("Please fill all fields");
    }
    else{
        console.log("Name: " + name.value);
        console.log("Age: " + age.value);
        console.log("Job: " + job.value);

        if (age.value < 18) {
            alert("You are under age");
        } else {
            alert("Registration Completed");
        }
    }
})