function Display({ currentMood }) {
    return (
        <div style={{border:'1px solid black',textAlign:'center',backgroundColor: currentMood ? currentMood.color : 'white'
}}>
            <p> Aujourd'hui je me sens <span>{currentMood ? currentMood.label : 'Aucune humeur 😶 !'}</span></p>
        </div>
    );
}
export default Display;