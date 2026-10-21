
function Rcherche_select({ onSelectType }) {
    return (
        <div>
            <label>Filtrer par type :</label>

            <select onChange={(e) => onSelectType(e.target.value)}>
                <option value="">Tous les types</option>
                <option value="fruit">Fruit</option>
                <option value="legume">Légume</option>
            </select>
        </div>
    );
}

export default Rcherche_select;
