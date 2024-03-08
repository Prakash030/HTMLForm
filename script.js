function validate(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email");
    let message=document.getElementById("message"); 
    
    if(name === "" || email.value === "" || message.value === ""){
        error_message.style.display="block"
        error_message.innerHTML="Enter all the fields!"
        return;
    }

    if (name.length <3){
        error_message.innerHTML="Enter a valid name!"
        return;
    }

    if (email.value.indexOf("@")==-1 || email.value.length<7){
        error_message.innerHTML="Enter a valid email!"
        return;
    }

    if (message.value.length===0){
        error_message.innerHTML="Message should not be empty!"
        return;
    }
    console.log("Name: "+name,"Email: "+email.value,"Message: "+message.value);
    error_message.style.display="block"
    error_message.style.background="green"
    error_message.style.color="white"
    error_message.innerHTML="You will get a callback soon!"
    alert("Form submitted successfully!")
}