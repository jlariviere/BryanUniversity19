loadTwo = document.getElementById("loadTwo")

handleClick = ()=> {
    // axios get & display
    axios.get("https://api.vschool.io/pokemon")
.then (response => {
    console.log(response)
     const mons= response.data.objects
    for(let i = 0; i < mons.length; i++){
        const h1 = document.createElement('h1')
        //only did ten with slice() because the list was too big
        const values = Object.values(mons[i].pokemon.slice(0,10))
        console.log(values)
      for(let n=0; n<values.length; n++){
          const h2 = document.createElement("h2")
          h2.setAttribute("class","mon")
          h2.textContent= values[n].name
          document.body.appendChild(h2)
      }  
    }
})
.catch(error => console.log(error))
}
loadTwo.addEventListener("click",handleClick)