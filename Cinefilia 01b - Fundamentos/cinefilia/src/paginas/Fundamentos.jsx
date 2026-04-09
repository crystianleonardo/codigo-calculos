/*
    Fundamentos é uma página complementar a aplicação Cinefilia que apresentará um "histórico" dos conceitos e recursos (e testes) estudados
*/
import estilos from './Fundamentos.module.css'
import {Botao} from '../componentes/Botao'
import {Contador} from '../componentes/Contador'
import {Formulario} from '../componentes/Formulario'
import {Calculos} from '../componentes/Calculos'

export function Fundamentos() {
    return(
        <div className={estilos.conteiner}>

            <h1 className={estilos.titulo}>Fundamentos</h1>

            <div className={estilos.conteudo}>

                <h2 className={estilos.subtitulo}>Ambiente de desenvolvimento</h2>
                <p className={estilos.texto}><a href="https://nodejs.org/pt-br" target="_blank">Node</a></p>
                <p className={estilos.texto}><a href="https://vite.dev/" target="_blank">Vite</a></p>
                <p className={estilos.texto}><a href="https://code.visualstudio.com/" target="_blank">VSCode</a></p>

                <h2 className={estilos.subtitulo}>Documentação</h2>
                <p className={estilos.texto}><a href="https://react.dev/" target="_blank">React</a></p>
                <p className={estilos.texto}><a href="https://developer.mozilla.org/pt-BR/" target="_blank">HTML, CSS e JS</a></p>
                <p className={estilos.texto}><a href="https://css-tricks.com/" target="_blank">mais CSS</a></p>

                <h2 className={estilos.subtitulo}>Comandos básicos no Terminal</h2>
                <p className={estilos.texto}>Criação de projeto: <strong className={estilos.textoNegrito}>npm create vite@latest</strong></p>
                <p className={estilos.texto}>Instalação/Atualização de dependências: <strong className={estilos.textoNegrito}>npm install</strong></p>
                <p className={estilos.texto}>Inicialização do servidor Vite: <strong className={estilos.textoNegrito}>npm run dev</strong></p>

                <h2 className={estilos.subtitulo}>Estrutura adotada para o projeto</h2>
                <p className={estilos.texto}>Inicialização: index.html &#8594; main.jsx &#8594; App.jsx &#8594; página inicial</p>
                <p className={estilos.texto}>Estilização &#8594; global.css e estilizações em módulos para os componentes.</p>
                <p className={estilos.texto}>Exportação e Importação.</p>

                <h2 className={estilos.subtitulo}>Componentes JSX</h2>
                <p className={estilos.texto}>Nomenclatura adotada no projeto:</p>
                <p className={estilos.texto}>Páginas &#8594; componentes jsx que ocuparão todo espaço disponível em tela.</p>
                <p className={estilos.texto}>Componentes &#8594; partes do layout que possuem maior complexidade e/ou que se repetem na mesma ou em outras páginas.</p>
   
                <h2 className={estilos.subtitulo}>Props</h2>
                <p className={estilos.texto}>Passagem de parâmetros para a função que cria o componente.</p>
                <p className={estilos.texto}>Acessada como uma "propriedade de tag" na utilização do componente.</p>
                <div className={estilos.conteinerExemplos}>
                    <Botao rotulo="Entrar" />
                    <Botao rotulo="Ok" />
                    <Botao rotulo="Cancelar" cor='#000' />
                    <Botao rotulo="Confirmar" />
                    <Botao rotulo="Sair" cor='#6f1d1b' />
                </div>

                <h2 className={estilos.subtitulo}>State</h2>
                <p className={estilos.texto}>Armazenamento de dados no componente possibilitando a interação com a página/componente já carregada no navegador.</p>
                <div className={estilos.conteinerExemplos}>
                    <Contador />
                </div>
                
                <h2 className={estilos.subtitulo}>Formulario controlado</h2>
                <p className={estilos.texto}>Vínculo entre States e inputs de formulários HTML.</p>
                <div className={estilos.conteinerExemplos}>
                    <Formulario />
                </div>
                
                <h2 className={estilos.subtitulo}>Calculos</h2>
                <p className={estilos.texto}>Conversão de tipos de dados.</p>
                <div className={estilos.conteinerExemplos}>
                    <Calculos />
                </div>
                
            </div>

        </div>
    )
}