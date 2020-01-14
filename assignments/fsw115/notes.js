fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(res => {
        
        for(let i = 0; i < res.results.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = res.results[i].name
            document.body.appendChild(h1)
        }
        
    })
    .catch(err => console.log(err))

    //axios
    //<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.js"></script>

    