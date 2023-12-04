/* Styles */
import style from "./NavBar.module.css";
/* Dependencies */
import { Link } from "react-router-dom";
/* Hooks */
import { useLocation } from "react-router-dom";

const NavBar=({handleChange,handleSubmit})=>{
    const {pathname}=useLocation();

    return(
        <div className={style.navConteiner}>
            {pathname ==='/home' &&
                <form className={style.searchBox}>
                    <input 
                        className={style.searchInput} 
                        placeholder="Buscar por nombre" 
                        type="search" 
                        onChange={handleChange}
                    />
                    <button 
                        className={style.buttonSearch} 
                        type="submit" 
                        onClick={handleSubmit}
                        disabled>
                    </button>
                </form>
            }
            <Link to='./home'>
                <button className={style.buttons}>Home</button>
            </Link>
            <Link to='./createBreed'>
                <button className={style.buttons}>Crear Raza</button>
            </Link>
        </div>
    )

}

export default NavBar;