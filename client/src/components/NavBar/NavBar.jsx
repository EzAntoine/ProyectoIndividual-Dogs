import style from "./NavBar.module.css";

const NavBar=()=>{

    return(
        <div className={style.searchBox}>
            <form>
                <input placeholder="Search"/>
                <button>Buscar</button>
            </form>
           
        </div>
    )

}

export default NavBar;