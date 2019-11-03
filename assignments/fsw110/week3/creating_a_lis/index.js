const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]
 
for(i=0; i< names.length; i++ ){
    var hello = document.createElement("h1")    
    hello.textContent= names [i]
    document.body.append (hello)  
}
 document.getElementsByTagName("h1")[0].style.color="red";
 document.getElementsByTagName("h1")[1].style.color="blue";
 document.getElementsByTagName("h1")[2].style.color="green";
 document.getElementsByTagName("h1")[3].style.color="purple";
 document.getElementsByTagName("h1")[4].style.fontSize="60px";
 document.getElementsByTagName("h1")[5].style.fontSize="10px";
 document.getElementsByTagName("h1")[6].style.fontFamily="cursive";
 document.getElementsByTagName("h1")[7].style.color="yellow";