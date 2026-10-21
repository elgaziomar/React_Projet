
import React, { useState } from "react";
import Recherche_input from "./recherche_input";
import Rcherche_select from "./recherche_select";
import Resultat from "./resultat";

const initialist=[ {nom:"banane",type:"fruit"}, 
    {nom:"orange",type:"fruit"}, 
    {nom:"pomme",type:"fruit"}, 
    {nom:"raisins",type:"fruit"}, 
    {nom:"kiwi",type:"fruit"}, 
    {nom:"tomate",type:"legume"}, 
    {nom:"carotte",type:"legume"}, 
    {nom:"pomme de terre",type:"legume"}, 
    {nom:"navet",type:"legume"}, 
    {nom:"poivron",type:"legume"} ]
    

function App() {
    const [resultats, setResultats] = useState(initialist);
    const [typeSelectionne, setTypeSelectionne] = useState("");
    const [term, setTerm] = useState("");

    const handleSearchName = (texte) => {
        setTerm(texte);
        filtrer(texte, typeSelectionne);
    };

    const handleFilterByType = (type) => {
        setTypeSelectionne(type);
        filtrer(term, type);
    };

    const filtrer = (texte, type) => {
        const filtered = initialist.filter((item) => {
            const nomCorrespond = item.nom
                .toLowerCase()
                .includes(texte.toLowerCase().trim());

            const typeCorrespond =
                type === "" || item.type === type;

            return nomCorrespond && typeCorrespond;
        });

        setResultats(filtered);
    };

    return (
        <div>
            <h1>Recherche de produits</h1>

            <Recherche_input onSearch={handleSearchName} />

            <Rcherche_select onSelectType={handleFilterByType} />

            <Resultat resultats={resultats} />
        </div>
    );
}

export default App;
