//Business name generator
rand1 = Math.random()
rand2 = Math.random()
rand3 = Math.random()
random1 = (parseInt(rand1 * (10)))
random2 = (parseInt(rand2 * (10)))
random3 = (parseInt(rand3 * (10)))
let str1 = "g "

if (random1 != 5) {
    str1.concat(" " + "Crazy")

}
else if (random1 != 7) {
    str1 + "Amazing"
}
else if (random1!=3) {
    str1 + "Fire"
}

if (random2 == 3) {
    str1 + "Engine"

}
else if (random2 == 8) {
    str1 + "Foods"
}
else {
    str1 + "Garments"
}

if (random3 == 2) {
    str1 + "Bros"


}
else if (random3 == 4) {
    str1 + "Limited"
}
else {
    str1 + "Hub"
}

console.log(str1)

