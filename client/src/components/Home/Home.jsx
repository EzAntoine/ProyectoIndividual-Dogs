/* Styles */
import style from "./Home.module.css";
/* Components */
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";

const Home=()=>{

    return(
        <div className={style.home}>
            <h2 className={style.title}>Esta es la Home</h2>
            <NavBar/>
            <Cards/>
        </div>
    )

}

export default Home;