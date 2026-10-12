import Detail from "./detail";
import General from "./general";
import Other from "./other";


function Profil(){
    let pagestyle={backgroundColor:'#0eeeee',minHeight:'100vh',padding:'20px'};
    let containerstyle={maxWidth:'800px',margin:'0 auto'};
    let flexstyle1={display:'flex'};
    let flexstyle2={display:'flex',flexDirection:'column',margin:'30px'};
    return(
        <div style={pagestyle}>
            <div style={containerstyle}>
                <h1 style={{textAlign:'center'}}>Students Profile page design example</h1>
                <h3 style={{textAlign:'center'}}>A responsive student profile page design</h3>
                <div style={flexstyle1}>
                    <Detail />
                    <div style={flexstyle2}>
                        <General />
                        <Other />
                    </div>
                </div>
            </div>
        </div>
       
    )

}
export default Profil;