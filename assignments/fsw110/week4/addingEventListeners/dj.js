 var box = document.getElementById("box1")

 handleMouseOver=() =>{
  box.style.backgroundColor="blue"
}
handleMouseDown=()=> {
  box.style.backgroundColor="red"
}
handleMouseUp=(params) =>{
  box.style.backgroundColor="yellow"
}
handleDoubleClick = ()=> {
  box.style.backgroundColor="green"
}
handleScroll= ()=>{
  box.style.backgroundColor= "orange"
}
box.addEventListener("mouseover",handleMouseOver)
box.addEventListener("mousedown",handleMouseDown)
box.addEventListener("mouseup",handleMouseUp)
box.addEventListener("dblclick",handleDoubleClick)
document.addEventListener("wheel",handleScroll)