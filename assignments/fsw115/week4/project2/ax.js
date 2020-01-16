//page one planets of starwars
//page two pokemon?
//style background and put the list in a div box or somthing 
loadOne = document.getElementById("loadOne")

handleclick = ()=> {
    // axios get & display
    axios.get("https://swapi.co/api/planets")
.then (response => {
    console.log(response)
    const planets= response.data.results
    for(let i = 0; i < planets.length; i++){
        const h1 = document.createElement('h1')
        h1.setAttribute("class","places")
        h1.textContent = planets[i].name
        document.body.appendChild(h1)
    }
})
.catch(error => console.log(error))
}
loadOne.addEventListener("click",handleclick)
//I moved this to another js file instead of researching why I was having
// problems with two .addEventListener

// loadTwo = document.getElementById("loadTwo")

// handleClick = ()=> {
//     // axios get & display
//     axios.get("https://api.vschool.io/pokemon")
// .then (response => {
//     console.log(response)
//      const mons= response.data.objects
//     for(let i = 0; i < mons.length; i++){
//         const h1 = document.createElement('h1')
//         //only did ten with slice() because the list was too big
//         const values = Object.values(mons[i].pokemon.slice(0,10))
//         console.log(values)
//       for(let n=0; n<values.length; n++){
//           const h2 = document.createElement("h2")
//           h2.textContent= values[n].name
//           document.body.appendChild(h2)
//       }  
//     }
// })
// .catch(error => console.log(error))
// }
// loadTwo.addEventListener("click",handleClick)