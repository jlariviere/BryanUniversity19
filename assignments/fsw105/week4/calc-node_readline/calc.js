const readline= require ("readline-sync");

add=(num1,num2) => {
   return  num1+num2
}
mul=(num1,num2)=>{
    return num1*num2
}
div=(num1,num2)=>{
    return num1/num2
}
sub=(num1,num2)=>{
    return num1-num2
}
const operation= readline.question("please enter the operation to preform: add,subtract,multiply,divide ");
const num1=readline.questionFloat("Please enter your first number ");
const num2=readline.questionFloat("Please enter your second number ");

function answer() {
    if (operation=="add"){
      return  add(num1,num2)
    }
    if (operation=="subtract"){
        return sub(num1,num2)
    }
    if (operation=="multiply"){
        return mul(num1,num2)
    }
    if (operation=="divide"){
        return div(num1,num2)
    }
}
console.log (answer())