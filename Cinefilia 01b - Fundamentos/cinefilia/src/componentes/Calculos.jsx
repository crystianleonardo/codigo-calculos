/*
    A função Number() converte um valor String para Number
    O "evento" onKeyDown impede a digitação direta no input aceitando somente as setinhas
    O objeto event do HTML pode ser referenciado apenas como "e"
*/

import estilos from './Calculos.module.css'
import {useState} from 'react'

export function Calculos(){

    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [resultado, setResultado] = useState('')

    const somar = (e) => {
        setResultado(Number(n1) + Number(n2))
        e.preventDefault()
    }

    const subtrair = (e) => {
        setResultado(Number(n1) - Number(n2))
        e.preventDefault()
    }

    const multiplicar = (e) => {
        setResultado(Number(n1) * Number(n2))
        e.preventDefault()
    }

    const dividir = (e) => {
        const r = Number(n1) / Number(n2);
        // Define 2 casas decimais e converte para número
        setResultado(Number(r.toFixed(2)));
        e.preventDefault()
    }

    return(
        <form className={estilos.conteiner}>

            <div className={estilos.conteinerRotulo}>
                <p className={estilos.rotulo}>Número 1</p>
                <p className={estilos.rotulo}>Número 2</p>
                <p className={estilos.rotulo}>Resultado</p>
            </div>

            <div className={estilos.conteinerCampos}>

                <input 
                    className={estilos.campo}
                    type='number'
                    value={n1}
                    onChange={(e) => setN1(e.target.value)}
                    onKeyDown={(e) => e.preventDefault()}
                />

                <input 
                    className={estilos.campo}
                    type='number'
                    value={n2}
                    onChange={(e) => setN2(Number(e.target.value))}
                    onKeyDown={(e) => e.preventDefault()}
                />

                <p className={estilos.resultado}>{resultado}</p>
            </div>

            <div className={estilos.conteinerBotao}>
                <button
                    className={estilos.botao}
                    onClick={somar}
                >Somar</button>

                <button
                    className={estilos.botao}
                    onClick={subtrair}
                >Subtrair</button>

                <button
                    className={estilos.botao}
                    onClick={multiplicar}
                >Multiplicar</button>

                <button
                    className={estilos.botao}
                    onClick={dividir}
                >Dividir</button>
            </div>


        </form>
    )
}
