document.getElementById("addMoneyBtn").addEventListener("click",function(e){
e.preventDefault()

const validPin=1234;
// const validMobileNumber=01839797991;

const bank=document.getElementById("bank").value 
const accountNumber=document.getElementById("accountNumber").value 
const amount=parseInt(document.getElementById("addMoney").value)
const avilable_balance=parseInt(document.getElementById("avilableBalance").innerText)

const pin=parseInt(document.getElementById("addPin").value)

if (accountNumber.length<11) {
    alert('Enter a valid account Number')
    return;
}
if (pin !==validPin) {
    alert("Enter a valid pin number")
    return;
}

// console.log(bank,accountNumber,amount,pin,avilable_balance);
const total_new_avilable_balance=amount+avilable_balance

document.getElementById("avilableBalance").innerText=total_new_avilable_balance

})