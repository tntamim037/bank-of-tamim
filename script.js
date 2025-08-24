document.getElementById("LoginButton").addEventListener("click",function(e){
    e.preventDefault()

   const mobileNumber=01839797991;
   const pinNumber=1234;
   
   const mobileNumberValue=document.getElementById('Mobile-number').value
   const mobileNumberValueCovt=parseInt(mobileNumberValue);

    const pinNumberValue=document.getElementById("pin-number").value
    const pinNumberValueCovt=parseInt(pinNumberValue);
    // console.log(mobileNumberValueCovt,pinNumberValueCovt);
    

    if (mobileNumberValueCovt===mobileNumber && pinNumberValueCovt===pinNumber){
        window.location.href="./home.html"
    } else {
       alert("wrong input");
        
    }
})