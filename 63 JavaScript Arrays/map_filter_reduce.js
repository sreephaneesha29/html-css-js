let arr =[1,2,3,4,5,6,7,8,9]
// let new_arr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     new_arr.push(element**2)
// }

let new_arr = arr.map((e, index)=>{
return (e**2)
})
console.log(new_arr)
const greaterThanSeven = (e)=>{
    if(e>7){

        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))