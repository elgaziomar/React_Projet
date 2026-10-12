import logo from './logo.svg'
import style from './style_module.css'
import Filiere from './filiere';


export default function Header(){
    let logo=require('./logo.svg');
    return(
        <div>
            <img src={logo} alt='logo' className={style.logoImg} /><br />
            <img src={logo} alt='logo' className={style.logoImg} /><br />
            Welcome To React Basics <br/>
            <Filiere/>
        </div>
    );
   





}