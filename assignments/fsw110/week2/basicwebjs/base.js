document.body.style.backgroundColor= 'firebrick'
document.body.style.fontSize='30px'
//header
var need = document.createElement('h1')
    need.textContent= 'N33dful'
    need.style.textAlign='center'
    need.style.fontSize= '90px'
    document.body.append (need)

//navbar
var nav = document.createElement('ul')
var home = document.createElement('a')
    home.textContent= 'Home'
    home.style.paddingRight= '18px'
var items = document.createElement('a')
    items.textContent= 'Items'
    items.style.paddingRight= '18px'
var about = document.createElement('a')
    about.textContent= 'about'
    about.style.paddingRight= '18px'
var sign = document.createElement('a')
    sign.textContent= 'Sign Up'
    sign.style.paddingRight= '18px'
nav.append (home,items,about,sign)
nav.style.backgroundColor= 'red'
document.body.append(nav)

    

//p
var p = document.createElement('p')
    p.textContent= 'Nothing you want,everything you need. Antiques and more!'
    document.body.append(p)

//list
var list=document.createElement('ol')
var box=document.createElement('li')
    box.textContent= 'Championship Boxing Gloves 1968'
var mic=document.createElement('li')
    mic.textContent= 'Antique Microscope'
var monkey=document.createElement('li')
    monkey.textContent= 'Monkey Paw'
list.append(box,mic,monkey)

document.body.append(list)

//footer
var foot=document.createElement('footer')
    foot.textContent= 'Visit us at 1st and Main in old town.'
    foot.style.marginTop= '200px'
    foot.style.backgroundColor='goldenrod'
    foot.style.fontSize= '20px'
    document.body.append(foot)