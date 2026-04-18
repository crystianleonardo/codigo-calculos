import style from './Temperatura.module.css'
import {useState} from 'react'

export function Temperatura(){
    
    const [f, setN1] = useState('')
    const [resultado, setResultado] = useState('')
    
    const calcular = (e) => {
        setResultado(((Number(f) - 32) * (5 / 9)).toFixed(1))
        e.preventDefault()
    }
    
    return(
        <form className={style.conteiner}>


            <div className={style.conteinerRotulo}>
                <p className={style.rotulo}>°F (Fahrenheint)</p>
                <p className={style.rotulo}>°C (Celsius)</p>
            </div>            
            <div className={style.conteinerCampos}>
                <input
                    className={style.campo}                
                    type='number'
                    value={f}
                    onChange={(e) => setN1(e.target.value)}
                    onKeyDown={(e) => e.preventDefault()}
                />
                <p>=</p>
                <p className={style.resultado}>{resultado}</p>
            

            
            </div>
            <div className={style.conteinerBotao}>
                <button
                    className={style.botao}
                    onClick={calcular}
                >Calcular
                </button>
            </div>
        </form>
    )
}
