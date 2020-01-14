
axios.get("https://api.vschool.io/[james_lar]/todo")
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h1 = document.createElement('h1')
        const values = Object.values(response.data[i])
       // h1.textContent = values
        h1.textContent = response.data[i].title
        document.body.appendChild(h1)
    }
})
.catch(error => console.log(error))