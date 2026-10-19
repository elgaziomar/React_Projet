import { useState } from "react";

function Exercice1() {
  const [pseudo, setPseudo] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Entrez votre pseudo"
        value={pseudo}
        maxLength={20}
        onChange={(e) => setPseudo(e.target.value)}
      />

      <p style={{ color: pseudo.length === 20 ? "red" : "black" }}>
        {pseudo.length} / 20 caractères
      </p>

      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h4>Aperçu en direct</h4>
        <p>Bonjour, {pseudo === "" ? "anonyme" : pseudo} !</p>
      </div>
    </div>
  );
}

export default Exercice1;