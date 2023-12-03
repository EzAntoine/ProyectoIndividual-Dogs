/* Styles */
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import style from './Landing.module.css'

const Landing=()=>{
    return(
        <div className={style.landing}>
            <h3 className={style.title}>¡Descubrí todas las razas de peluditos y creá las tuyas!</h3>
            <div className={style.buttonContainer}>
                <Link to='/home'>
                    <img className={style.image} src={require('../../assets/perroLanding.png').default} alt='dog'/>
                    <button className={style.button}>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;