import style from './Entalpia.module.css'
import {useState} from 'react'

export function VEntalpia(){
    
    const [hp, setN1] = useState('')
    const [hr, setN2] = useState('')
    const [resultado, setResultado] = useState('')
    
    const calcular = (e) => {
        setResultado(Number(hp) - Number(hr))
        e.preventDefault()
    }
    
    return(
        <form className={style.conteiner}>

            <div className={style.conteinerRotulo}>
                <p className={style.rotulo}>Hp</p>
                <p className={style.sinal}></p>
                <p className={style.rotulo}>Hr</p>
                <p className={style.rotuloA}>ΔH</p>
            </div>
            <div className={style.conteinerCampos}>
                <input
                    className={style.campo}                
                    type='number'
                    value={hp}
                    onChange={(e) => setN1(e.target.value)}
                    onKeyDown={(e) => e.preventDefault()}
                    placeholder='(Hp)Entalpia Produtos'               
                />
                
                <p className={style.sinal}>-</p>
                
                <input
                    className={style.campo} 
                    type='number'
                    value={hr}
                    onChange={(e) => setN2(Number(e.target.value))}
                    onKeyDown={(e) => e.preventDefault()}               
                    placeholder='(Hr)Entalpia Reagentes'               
                />

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
