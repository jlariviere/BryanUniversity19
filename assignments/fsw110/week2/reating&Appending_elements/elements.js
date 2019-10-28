var welcome = document.createElement('h1')
    welcome.textContent= 'Welcome to my JS site'
    document.body.append (welcome)
var word = document.createElement('p')
    word.textContent = 'All of this was created with Javascript'
    document.body.append(word)
    
var list = document.createElement('ol')
var lione=document.createElement('li')
    lione.textContent= 'create elements'
var litwo=document.createElement('li')
    litwo.textContent= 'style elements'
var lithree=document.createElement('li')
    lithree.textContent= 'append elements'
list.append(lione,litwo,lithree)
document.body.append (list)
  