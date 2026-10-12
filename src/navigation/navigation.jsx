function Navigation(){
    let ulstyle={display:'flex',justifyContent:'center',gap:'30px',listStyle:'none',padding:'15px',backgroundColor:'#f1f1f1'};
    return(
        <div>
            <ul style={ulstyle}>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Contact</li>
            </ul>
        </div>

    );
}
export default Navigation;