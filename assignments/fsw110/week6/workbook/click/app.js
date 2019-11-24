// make the box disapear when the user clicks it


redBox= document.getElementById("box")
handleclick = ()=> {
    redBox.style.backgroundColor="white" }

redBox.addEventListener("click",handleclick)
