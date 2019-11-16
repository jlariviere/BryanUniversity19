//filter
const arr=[1,2,3,4,5,6,7,8,9]
//1
const fiveAndGreater= arr.filter(num => num>=5)
console.log(fiveAndGreater)
//2
const even= arr.filter(num => num % 2===0)
console.log(even)
//3
const str=["cat","chicken","dog","elephant","elk"]
const fiveOrLess= str.filter(String => String.length<=5)
console.log(fiveOrLess)
//4
const ppl=[
    {name: "angelina Jolie", member: true},
    {name: "Eric Jones", member: false},
    {name: "Paris Hilton", member: true},
    {name: "Kayne West", member: false},
    {name: "Bob Ziroll", member: true},
]
const peopleWhoBelong= ppl.filter(peopleWhoBelong => peopleWhoBelong.member)
console.log (peopleWhoBelong)
//5
const people=[
    {name: "angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100},
]
const ofAge= people.filter(people => people.age>=18)
console.log(ofAge)
//map
//1
const double = arr.map(num => num*2)
console.log (double)
//2
const stringItUp = arr.toString()
console.log(stringItUp)
//3
const names =["john","JACOB","jinGleHeimer","schmidt"]


//4
const namesOnly = people.map(people=>people.name.toString())
console.log(namesOnly)
//5
const canGo = people.map(people=> people.age>=18 ? people.name+" Can go to the Matrix": people.name+" is under age!!" )
console.log(canGo)
//6


//reduce
//1
const sum = arr.reduce(function(final,num) {
    final+=num
    return final
})
console.log(sum)
//2
const stringConcat = arr.join("")
console.log(stringConcat)
//3
const voters=[
    {name: "Bob",age:30,voted:true},
    {name: "Jake",age:32,voted:true},
    {name: "Kate",age:25,voted:false},
    {name: "Sam",age:20,voted:false},
    {name: "Phil",age:21,voted:true},
    {name: "Ed",age:55,voted:true},
    {name: "Tami",age:54,voted:true},
    {name: "Mary",age:31,voted:false},
    {name: "Becky",age:43,voted:false},
    {name: "Joey",age:41,voted:true},
    {name: "Jeff",age:30,voted:true},
    {name: "Zack",age:19,voted:false},
]
const voteCount= voters.reduce(function (final,voter) {
    if (voter.voted){
        final++
    }
    return final
},0)
console.log(voteCount)
//4
const wishList= [
    {title:"tesla Model S", price:90000},
    {title:"4 carat dimand ring", price:45000},
    {title:"Fancy hacky sack", price:5},
    {title:"Gold fidgit spinner", price:2000},
    {title:"another tesla Model S", price:90000},
]
const shopping= wishList.reduce(function (final,num) {
    final.price+=num.price
    return final
})
console.log(shopping)
//5
const array = [
    ["1","2","3"],
    [true],
    [4,5,6]
]
const flatten = array.reduce((acc, val) => acc.concat(val), [])
console.log(flatten)
//6
const voterResults = voters.reduce(function(final, voter){
    if(voter.age>=18 && voter.age<=25 && voter.voted){
        final.youngVotes++
    }  if (voter.age>=18 && voter.age<=25) {
        final.youth++
    }
    if(voter.age>=26 && voter.age<=35 && voter.voted){
        final.midVotes++
    }  if (voter.age>=26 && voter.age<=35) {
        final.mids++
    }
    if(voter.age>=36 && voter.age<=55 && voter.voted){
        final.oldVotes++
    }  if (voter.age>=36 && voter.age<=55) {
        final.olds++
    }
    return final
},{youngVotes:0,youth:0,midVotes:0,mids:0,oldVotes:0,olds:0}   )
   console.log(voterResults)
//sort
//1
const ar = [1,3,5,2,90,20]
ar.sort((a,b)=>a-b)
console.log(ar)
//2
ar.sort((a,b)=>a+b)
console.log (ar)
//3
const lengthSort=["dog","wolf","by","family","eaten"]
lengthSort.sort((a,b) => a.length- b.length)
console.log(lengthSort)
//4
lengthSort.sort()
console.log(lengthSort)
//5
const byAge=[
    {name:"Quiet Samurai",age:22},
    {name:"Arrogant Ambassador",age:100},
    {name:"Misunderstood Observer",age:2},
    {name:"Unlucky Swami",age:77},
]
byAge.sort((a,b)=>a.age-b.age)
console.log(byAge)

