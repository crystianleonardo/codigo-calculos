import style from './Area.module.css'
import {useState} from 'react'

export function Area(){
    
    const [b, setN1] = useState('')
    const [B, setN2] = useState('')
    const [h, setN3] = useState('')
    const [resultado, setResultado] = useState('')
    
    const calcular = (e) => {
        setResultado(((Number(b) + Number(B)) * Number(h)) / 2)
        e.preventDefault()
    }
    
    return(
        <form className={style.conteiner}>

            <div className={style.conteinerCampos}>
                <input
                    className={style.campo}                
                    type='number'
                    value={b}
                    onChange={(e) => setN1(e.target.value)}
                    onKeyDown={(e) => e.preventDefault()}
                />
                <input
                    className={style.campo} 
                    type='number'
                    value={B}
                    onChange={(e) => setN2(Number(e.target.value))}
                    onKeyDown={(e) => e.preventDefault()}               
                />
                <input
                    className={style.campo} 
                    type='number'
                    value={h}
                    onChange={(e) => setN3((e.target.value))}
                    onKeyDown={(e) => e.preventDefault()}               
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
