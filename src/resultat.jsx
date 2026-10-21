
function Resultat({ resultats }) {
    return (
        <div>
            <h3>Resultat :</h3>

            {resultats.length === 0 ? (
                <p>Aucun produit trouvé</p>
            ) : (
                <ul>
                    {resultats.map((prod, index) => (
                        <li key={index}>
                            {prod.nom} - <i>{prod.type}</i>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Resultat;
