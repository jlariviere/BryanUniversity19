//Preliminaries
if (5>3){
    console.log ('is greater than')
}

if ('cat'.length == 3){
    console.log ('is the length')
}
if ('cat'=='dog'){
    console.log ('same')
}
else {
    console.log ('not the same')
}
//Bronze metal
var person= {
    name: 'Bobby',
    age:14,
}
if (person> 18){
    console.log ('allowed to go to the movie')
}
else {
    console.log ('not allowed')
}
if (person.name.charAt(0) == 'B') {
        console.log('allowed');
}
if (person.name.charAt(0) == 'B' && person> 18){
    console.log ('allowed')
}
else {
    console.log ('not allowed')
}
//Silver medal
if (1==='1'){
    console.log ('strict')
}
else if (1=='1'){
console.log ('loose')
}
else {
    console.log ('not equal at all')
}
if (1<=2 && 2===4){
    console.log ('yes')
}
//Gold metal

if (typeof 'dog' === 'string'){
    console.log ('is a string')
}
 if (true=== false || true){
     console.log ('is a boolean')
 }   
 
 if (typeof person === "undefined") {
    console.log ('person is undefined')
  } else {
    console.log ('person is defined')
  }
 if ('s'>12){
     console.log ('true')
 }
 else {
    console.log ('false')
}
 if ('r'>72){
    console.log ('true')
}
else {
    console.log ('false')
}
if ('v'>13){
    console.log ('true')
}
else {
    console.log ('false')
}

function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
    
  }
  console.log (even_or_odd (8))