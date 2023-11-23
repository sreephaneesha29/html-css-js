/*
function nice(name) {
    console.log("@" + name + "is good boy and he is learning web devlopment")
    console.log("@" + name + "is good boy and he is learning python")
    console.log("@" + name + "is good boy and he is learning java_script")
    console.log("@" + name + "is good boy and he is learning html & CSS")

}
*/

function sum(a, b, c = 3) {
    // console.log(a + b)
    // where "c" is default value
    return a + b + c
}
result1 = sum(3) //-----> return NaN
result2 = sum(2, 3)
console.log(result1)
console.log(result2)

const func1 = (x) => {
    console.log("I am a arrow function", x)
}
func1(12)
func1(54)
func1(64)
