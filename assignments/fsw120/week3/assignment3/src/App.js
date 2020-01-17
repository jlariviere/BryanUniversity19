import React from 'react';
import Heros from "./hero"
import superHeros from "./superHero"
const App=()=>{
    const hero = superHeros.map(heros =>
        <Heros name= {heros.name} image={heros.imageName} catchPhrase={heros.catchPhrase}/>)
    return(
        <div>
            {hero}
        </div>
    )
}

export default App;