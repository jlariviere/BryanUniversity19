// var fruit= ["banana", "apple","orange","watermelon",];
// var vegetables= ["carrot","tomato","pepper","lettuce"];
//     console.log ("Fruit: ",fruit)
//     console.log("Vegetables: ", vegetables)
// //1
// vegetables.pop()
//     console.log("Vegetables: ", vegetables)
// //2
// fruit.shift()
//     console.log("Fruit: ",fruit)
//  //3
//     console.log(fruit.indexOf("orange"))
//  //4   
// fruit.push("1")
//     console.log("Fruit: ",fruit)
// //5
//     console.log (vegetables.length)
// //6
// vegetables.push("3")    
//     console.log("Vegetables: ", vegetables)
// //7
// var food= fruit.concat(vegetables)
//     console.log ("Food: ",food)
// //8
// food.splice(4,2)
// console.log (food)
// //9
// food.reverse()
// console.log (food)
// //10
// string= food.join();  
// console.log (string)

//or Im not sure what the assignment was asking for so here's both
var fruit= ["banana", "apple","orange","watermelon",];
var vegetables= ["carrot","tomato","pepper","lettuce"];

function string(fruit,vegetables) {
    vegetables.pop();
    fruit.shift();
    fruit.push("1");
    vegetables.push("3");
    var food= fruit.concat(vegetables);
    food.splice(4,2);
    food.reverse();
    return food.join();
}
console.log (string(fruit,vegetables))