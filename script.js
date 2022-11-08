function addition(){
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value
    let result = Number(num1) + Number(num2)
    document.getElementById("answer").textContent += " : "+result
}
function subtraction(){
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value
    let result = Number(num1) - Number(num2)
    document.getElementById("answer").textContent += " : "+result
}
function multiply(){
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value
    let result = Number(num1) * Number(num2)
    document.getElementById("answer").textContent += " : "+result
}
function division(){
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value
    let result = Number(num1) / Number(num2)
    document.getElementById("answer").textContent += " : "+result
}
document.getElementById("addition").addEventListener("click",addition)
document.getElementById("subtraction").addEventListener("click",subtraction)
document.getElementById("multiply").addEventListener("click",multiply)
document.getElementById("division").addEventListener("click",division)