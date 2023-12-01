/* Styles */
import { useState } from 'react';
import style from './Paginate.module.css';

export const Paginate=({pagina,setPagina,max})=>{

    const [input,setInput]=useState(1);

    const nextPage=()=>{
        if(input<max){
            setInput(input+1);
            setPagina(pagina+1);
        }
    }

    const prevPage=()=>{
        if(input>1){
            setInput(input-1);
            setPagina(pagina-1);
        }
    }

    return(
        <div className={style.container}>
            <button className={style.button} onClick={prevPage}> &lt; </button>
            <input className={style.input} name='page' autoComplete='off' value={input}/>
            <p> - {max}</p>
            <button className={style.button} onClick={nextPage}> &gt; </button>
        </div>
    )
}