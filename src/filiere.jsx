export default function Filiere(){
    let filier=[
        {id:1,name:'DEV'},
        {id:2,name:'IA'},
        {id:3,name:'SECURITE'},
        {id:4,name:'INFO'}

    ];
    let notes=[20,20,20];
    //let stagiare={};


    return(
        <div>
            <ul>
                {filier.map((filier,index) => (
                    <li key={filier.id}>{filier.id}-{filier.name}----index{index}</li>
                ))}
                <hr/>
                {notes.map((note,index) => (
                    <li key={index}>{index}----{note}</li>
                ))}
            </ul>
        </div>
    )

}