const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon" , true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
       // console.log(xhr.responseText)
       const data = JSON.parse(JSONdata)
       showData (data.objects)
         //console.log(data.objects)
    } 
}

function showData(arr){
    for(let i = 0; i < arr.length; i++){
        for( let n=0; n<arr[i].pokemon.length; n++){
        const values = Object.values(arr[i].pokemon[n])
        console.log(values)
    
        const li = document.createElement("li")
        li.textContent = values
        document.body.appendChild(li) 
      }  
    }
}


