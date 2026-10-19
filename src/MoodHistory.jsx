function Historique({ moodsHistory }) {
    return (
        <div style={{
            marginTop: '20px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            textAlign: 'center'
        }}>
            <h3>Historique des humeurs</h3>

            {moodsHistory.length === 0 ? (
                <p>Aucune humeur enregistrée !</p>
            ) : (
                moodsHistory.map((mood, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: mood.color,
                            padding: '10px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #ccc'
                        }}
                    >
                        {mood.emoji} {mood.label}
                    </div>
                ))
            )}
        </div>
    );
}

export default Historique;