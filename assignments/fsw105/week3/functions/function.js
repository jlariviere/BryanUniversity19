function sum (num1,num2) {
    return num1 + num2
}

function largest (num1,num2,num3) {
    return Math.max(num1,num2,num3)
}
function even_odd (num) {
    if (num %2==0){
    return "even" 
    }
    else {return "odd"}
}
function length (string) {
    if (string.length<=20){
        return string.concat(string);
    }
    else {
        return string.slice(0,string.length/2)
    } 
} 
//extra credit attempt?
function fib(n) {
    if (n < 2){
      return n
    }
    return fib(n - 1) + fib (n - 2)
  }
  var result =fib (6)
  console.log (result)

  var fibonacci_series = function (n) 
  {
    if (n===1) 
    {
      return [0, 1];
    } 
    else 
    {
      var s = fibonacci_series(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  };for (var i=0; i<fibonacci_series.length;i++){
}
  var result= sum (fibonacci_series[i]+[i])
   console.log(fibonacci_series(8));

console.log  (result)

