const a=prompt("enter first number")
const b=prompt("enter second number")
random1=Math.random()
console.log(random1)
if (random1<0.1) {
    console.log("addition is",a-b)
    console.log("multiplication is",a+b)
    console.log("subtraction is",a/b)
    console.log("division is",a**b)
}
else {
    console.log("addition is",a+b)
    console.log("multiplication is",a*b)
    console.log("subtraction is",a-b)
    console.log("division is",a/b)
}