/*
    Props são parâmetros que podem ser passados para a função que cria o componente.
    props (em minúsculo) também é o nome de um objeto padrão do React que contém os atributos que serão passados. No componente Botao são props.rotulo e props.cor
    As chaves (na passagem de parâmetros) são para desestruturar esse objeto e acessar diretamente seus atributos. Desestruturação é um conceito do JavaScript.
    As props podem ser de tipos primitivos (string, number, boolean, null ou undefined), objetos ou funções.
    Se a intenção for basear-se em uma props para estilização, o CSS deve ser em linha.
*/

import estilos from './Botao.module.css'

export function Botao({rotulo, cor}){
    return(
        <div 
            className={estilos.conteiner}
            style={{ backgroundColor: cor }}
        >
            <p className={estilos.texto}>{rotulo}</p>
        </div>        
    )
}
