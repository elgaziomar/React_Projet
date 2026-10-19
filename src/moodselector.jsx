function SelectMood({ onMoodSelect }) {
    const moods = [
        { emoji: '😊', label: 'heureux', value: 'heureux', color: '#ffeb3b' },
        { emoji: '😴', label: 'fatigue', value: 'fatigue', color: '#81d4fa' },
        { emoji: '😡', label: 'stresse', value: 'stresse', color: '#ef9a9a' },
        { emoji: '😎', label: 'motive', value: 'motive', color: '#a5d6a7' }
    ];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px'
        }}>
            {moods.map((mood) => (
                <button
                    key={mood.value}
                    style={{
                        backgroundColor: mood.color,
                        padding: '15px 25px',
                        border: '1px solid #ccc',
                        borderRadius: '10px'
                    }}
                    onClick={() => onMoodSelect(mood)}
                >
                    {mood.emoji} {mood.label}
                </button>
            ))}
        </div>
    );
}

export default SelectMood;