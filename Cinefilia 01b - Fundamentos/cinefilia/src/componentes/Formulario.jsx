/*
    O uso de State para armazenar dados em componentes de forma que impactem no layout já renderizado (página carregada no navegador) a cada atualização
    extende-se a entradas de dados por inputs de formulários.
    Nesse caso, a sincronização entre State e Input é implementado em dois passos:
        A propriedade value recebendo a função de leitura do state garante que o input reflita o state.
        O "evento" onChange (a partir da função que identifica e recupera o value do input acessado) atualiza o state a cada alteração do input.
    O "evento" onSubmit "intercepta" o "comportamento padrão" de submit do button dentro de um form.
    Ainda sobre o "comportamento padrão do form" a função event.preventDefault() evita que a página seja recarregada.
*/
import estilos from './Formulario.module.css'
import {useState} from 'react'

export function Formulario(){

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [mensagem, setMensagem] = useState('')

    const apresentarMensagem = (event) => {
        setMensagem(`Olá! ${nome} ${sobrenome}, seja bem-vindo!`)
        event.preventDefault()
    }

    return(
        <form 
            className={estilos.conteiner}
            onSubmit={apresentarMensagem}
        >

            <input 
                className={estilos.campo} 
                placeholder='Nome'
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />

            <input 
                className={estilos.campo} 
                placeholder='Sobrenome'
                value={sobrenome}
                onChange={(event) => setSobrenome(event.target.value)}
            />

            <button className={estilos.botao}>Ok</button>

            <p className={estilos.mensagem}>{mensagem}</p>
        </form>
    )
}