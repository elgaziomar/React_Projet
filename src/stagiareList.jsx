import React from "react";
import {useState} from "react";
import StagiareCard from "./stagiareCard";
function StagiareList(){
    let stagiareList=[
        {
            id :1,
            nom :'EL Faghloumy',
            prenom :'Mohamed',
            filiere :'Developement Full Stack'

        },
        {
            id :2,
            nom :'EL Gazi',
            prenom :'Omar',
            filiere :'Developement Full Stack'
        }
    ];

    const [stagiares,setStagiares]=useState(stagiareList)
    const [nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [filiere,setFilier]=useState('')
    const [isAdd,setIsAdd]=useState('')

    function addNewStag(event){
        event.preventDefault()
        let idS=stagiareList.length +1
        let stagiare={id: idS,nom,prenom,filiere}
        setStagiares(stagiares => [...stagiares,stagiare])
        setIsAdd(false)
        setNom('')
        setPrenom('')
        setFilier('')
    }
    function suppStg(params){
        setStagiares(stagiares=>stagiares.filter ((stg)=> stg.id !==params))
    }

    return(
        <div>
            La liste des Stagiare 
            {!isAdd ? <button onClick={()=> setIsAdd(true)}>Create new stagiare</button> :
            <form onSubmit={e=> addNewStag(e)}>
                <div>
                    <label htmlFor="">Nom  :</label>
                    <input 
                        type="text"
                        value={nom}
                        onChange={(e)=>setNom(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Prenom  :</label>
                    <input 
                        type="text"
                        value={prenom}
                        onChange={(e)=>setPrenom(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Filiere  :</label>
                    <input 
                        type="text"
                        value={filiere}
                        onChange={(e)=>setFilier(e.target.value)}
                    />
                </div>
                <button type="submit" >Eneregistrer</button>
            </form>}
            <br/>
            <br/>
            <table border={'1'}>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Filiere</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
          
                {
                    stagiares.map((stagiare)=>(
                    <tr key={stagiare.id}><StagiareCard stagiare={stagiare} onDeleteStg={suppStg}/>
                        <td>
                            <button onClick={()=>suppStg(stagiare.id)}>Supprimer</button>
                        </td>

                    </tr>))
                }
                </tbody>
            </table>

        </div>
    
    );

}
export default StagiareList;