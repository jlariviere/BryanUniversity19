
 axios.get("https://rickandmortyapi.com/api/character/1")
 
 .then(response => {
     console.log(response)

       const h1 = document.createElement('h1')
       h1.textContent= response.data.name
       document.body.appendChild(h1)

    //     const h1 = document.createElement('h1')
    //     const values = Object.entries(response.data)
    //     h1.textContent = values
    //    // h1.textContent = response
    //     document.body.appendChild(h1)
    

    //  const people= response.data.results
    //  for(let i = 0; i < people.length; i++){
    //      const h1 = document.createElement('h1')
    //      const entries = Object.entries(people[i])
    //      h1.textContent = entries
    //    //  h1.textContent = people[i].name
    //      document.body.appendChild(h1)
    //  }

    const originUrl= (response.data.origin.url)
    return axios.get(originUrl)
 })
 .then (response=>{
    console.log(response)
        const h2 = document.createElement('h2')
      // const entries= Object.entries(response.data)
       h2.textContent= `From: ${response.data.name}`
       document.body.appendChild(h2)
       return axios.get(response.data.residents[0])
 })
 .then(response=>{
     console.log(response)
     const h1 = document.createElement('h1')
     h1.textContent= response.data.name
     document.body.appendChild(h1)
 })
 .catch(error => console.log(error))