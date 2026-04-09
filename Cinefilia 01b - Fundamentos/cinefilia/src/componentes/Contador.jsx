/*
    Para que um dado armazenado em um componente seja apresentado e atualizado a cada alteração no layout renderizado (no navegador) esse dado deve ser armazenado em um state.
    Um state é declarado a partir do Hook useState e na sua declaração são definidas uma função de leitura e uma de alteração (nessa ordem).
    Na declaração do state é recomendado inicializar seu valor por meio do construtor que, por sua vez, indica o tipo de dado que será armazenado (lembrando que a solução ideal para tipagem no JavaScript é a utilização do TypeScript que estudaremos posteriormente).
    Nesse exemplo, o "evento" onClick é utilizado para tornar uma div "clicável" (assumindo o comportamento de um botão) e vinculando a execução das respectivas funções (callback functions).
    Obs.: Coloquei aspas em evento para o onClick porque, na verdade, trata-se de um SyntheticEvents (Eventos Sintéticos) que funcionam como um mapeamento para o evento onclick que é um atributo manipulador de eventos no HTML puro.
          Essa observação cabe a todos os "eventos" que utilizaremos.
*/

import estilos from './Contador.module.css'
import {useState} from 'react'

export function Contador(){

    const [valor, setValor] = useState(0)

    const incrementar = () => setValor(valor + 1) 

    const decrementar = () => setValor(valor - 1)

    return(
        <div className={estilos.conteiner}>
            <p>Contador</p>
            <div className={estilos.conteinerBotoes}>

                <div 
                    className={estilos.botao} 
                    onClick={incrementar}
                >
                    <p className={estilos.botaoTexto}>+</p>
                </div>
                
                <p className={estilos.valor}>{valor}</p>
                
                <div 
                    className={estilos.botao} 
                    onClick={decrementar}
                >
                    <p className={estilos.botaoTexto}>-</p>
                </div>

            </div>
        </div>
    )
}