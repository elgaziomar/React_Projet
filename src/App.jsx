import Affichec from './client';
import Affichev from './visiteur';
import {useState} from 'react'

function App(){
    //const [connect,setConnect]=useState(false)
    //function changerEtat(){
    //    setConnect(!connect)}

    //return (
        //<div>
            //<button onClick={changerEtat}> {connect ? 'Deconnecter': 'Connecter'}</button>
           
            //{connect ? <Affichec nom='omar'/> : <Affichev/>}
        //<div>
    // );
    const [nombre,setNombre]=useState(10);
    //if setNombre==='+' return {setNombre(nombre+2)}
    const ajouter=()=>{setNombre(nombre+2)};
    const diminuer=()=>{setNombre(nombre-1)};
    return (
        <div>
            <button onClick={ajouter}>+</button>
            <p>{nombre}</p> 
            <button onClick={diminuer}>-</button>
        </div>
    );

    
}


export default App;