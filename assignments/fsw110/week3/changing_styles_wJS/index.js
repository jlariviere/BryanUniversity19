const list = ["bats","pumpkins","skeletens","spiders"]

for(i=0; i< list.length; i++ ){
    var result = document.createElement("h1")    
    result.textContent= list [i]
    
    document.body.append (result)
}

document.getElementsByTagName("h1")[0].style.fontSize="20px"
document.getElementsByTagName("h1")[1].style.fontWeight="lighter"
document.getElementsByTagName("h1")[2].style.fontFamily="sans-serif"
document.getElementsByTagName("h1")[3].style.color="cornflowerblue"

document.querySelector("h1")[i].classlist.add=".border";



