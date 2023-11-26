const a=prompt("enter first number")
const b=prompt("enter second number")
let c =prompt("Enter opration")
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