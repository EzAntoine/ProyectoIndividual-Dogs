/* Styles */
import style from "./NavBar.module.css";
/* Dependencies */
import { Link } from "react-router-dom";

const NavBar=({handleChange,handleSubmit})=>{

    return(
        <div className={style.navConteiner}>
            <form className={style.searchBox} onChange={handleChange}>
                <input className={style.searchInput} placeholder="Buscar por nombre" type="search"/>
                <button className={style.buttonSearch} type="submit" onClick={handleSubmit}></button>
            </form>
            <Link to='./about'>
                <button className={style.buttons} >About</button>
            </Link>
            <Link to='./home'>
                <button className={style.buttons} >Home</button>
            </Link>
            <Link to='./createBreed'>
                <button className={style.buttons}>Crear Raza</button>
            </Link>
        </div>
    )

}

export default NavBar;