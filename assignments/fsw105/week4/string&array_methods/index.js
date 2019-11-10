//capitalizeAndLowercase
function caps(name) {
   return name.toUpperCase()+name
}
console.log(caps("james"))

// middleIndex
function mid(middle) {
   return Math.floor(middle.length/2)
}
console.log(mid("hello"))
   
//firstHalf
function first(str) {
   return str.slice(0,str.length/2)
}
console.log(first("potato chips"))

//firstHalfCapSecondLower
function half(string) {
   let first= string.slice(0,string.length/2).toUpperCase()
   let second= string.slice(string.length-string.length/2 ).toLowerCase()
  return first+second
}
console.log(half("hello"))

// optionalCode
function capital(blank) {
  return blank.charAt( blank.indexOf(" ") .toUpperCase)
}
console.log(capital(" blank blink blunk"))

