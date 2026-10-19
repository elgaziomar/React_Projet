import { useState } from "react";

function StudentProfile() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Masquer mon profil" : "Afficher mon profil"}
      </button>

      {isVisible ? (
        <div>
          <p>Nom : Omar Elgazi</p>
          <p>Filière : Développement Digital</p>
        </div>
      ) : (
        <p>Les informations sont masquées</p>
      )}
    </div>
  );
}

export default StudentProfile;