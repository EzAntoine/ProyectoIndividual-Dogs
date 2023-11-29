import style from "./NavBar.module.css";

const NavBar=({handleChange,handleSubmit})=>{

    return(
        <div className={style.searchBox}>
            <form onChange={handleChange}>
                <input placeholder="Search" type="search"/>
                <button type="submit" onClick={handleSubmit}>Buscar</button>
            </form>
           
        </div>
    )

}

export default NavBar;