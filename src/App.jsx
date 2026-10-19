import { useState } from 'react';
import Display from './moodDisplay';
import SelectMood from './moodselector';
import Historique from './MoodHistory';

function App() {
    const [mood, setMood] = useState(null);
    const [historique, setHistorique] = useState([]);
    const [showHistorique, setShowHistorique] = useState(false);

    function reinitialiser() {
        setMood(null);
        setHistorique([]);
        setShowHistorique(false);
    }

    function choisirMood(newMood) {
        setMood(newMood);
        setHistorique(prev => [...prev, newMood]);
    }

    return (
        <div>
            <SelectMood onMoodSelect={choisirMood} />
            <br/>

            <Display currentMood={mood} />

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button
                    onClick={() => setShowHistorique(!showHistorique)}
                    style={{
                        padding: '10px 20px',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        cursor: 'pointer'
                    }}
                >
                    {showHistorique
                        ? "Cacher l'historique"
                        : "Afficher l'historique"}
                </button>

                <button
                    onClick={reinitialiser}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#ef9a9a',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        marginLeft: '10px'
                    }}
                >
                    Réinitialiser
                </button>
            </div>

            {showHistorique && (
                <Historique moodsHistory={historique} />
            )}
        </div>
    );
}

export default App;