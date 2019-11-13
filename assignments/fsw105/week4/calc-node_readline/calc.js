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
const num1=readline.question("Please enter your first number");

const num2=readline.question("Please enter your second number");

const operation= readline.question("please enter the operation to preform: add,sub,mul,div");

function answer() {
    if (operation=="add"){
      return  add()
    }
}
answer();