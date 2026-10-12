import Affichec from './client';
import Affichev from './visiteur';


function Bienvenue(props){
  if (props.role==='client') {
        return <Affichec nom={props.nom}/>  
    }
    else{
        return <Affichev/>
    }

    

}


export default Bienvenue;