const a=prompt("enter first number")
let c =prompt("Enter opration")
const b=prompt("enter second number")
random1=Math.random()
const obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
    
}
if (random1>0.1) {
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
    
}
else{
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
    
}