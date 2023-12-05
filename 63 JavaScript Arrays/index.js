// array
let arr = [1, 3, 5, 7, 9]
console.log(arr)
console.log(arr.length)
// array are mutuable
console.log(arr[0]) // 1
console.log(arr[1]) // 3
console.log(arr[2]) // 5
console.log(arr[3]) // 7
console.log(arr[4]) // 9
console.log(arr[5]) //undefined


arr[4]=10000
arr[3]=5000
arr[2]=2500
arr[1]=1250
arr[0]=800
console.log(arr)
console.log(typeof arr) // object

console.log(arr.toString())
console.log(arr.join( " and " ))

console.log(arr.pop()) //pop last element
console.log(arr)
console.log(arr.push("sreephaneesha"))
console.log(arr)
console.log(arr.shift())
console.log(arr.unshift("jacku"))
console.log(arr)


