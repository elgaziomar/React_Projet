
import { useState } from "react";

function Recherche_input({ onSearch }) {
    const [term, setTerm] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        onSearch(term);
    };

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    placeholder="Rechercher..."
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />

                <button type="submit">Rechercher</button>
            </form>
        </div>
    );
}

export default Recherche_input;
