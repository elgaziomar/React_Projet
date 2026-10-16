function StagiareCard(props){
    //function supprimerStg(){
    //    props.onDeletestg(props.stagiare.id)
    //}

    return(
        <>
            <td> {props.stagiare.nom}</td>
            <td> {props.stagiare.prenom}</td>
            <td> {props.stagiare.filiere}</td>
          
        </>
    );





}
export default StagiareCard;