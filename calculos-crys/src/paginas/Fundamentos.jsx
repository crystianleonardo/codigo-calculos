import style from './Fundamentos.module.css'
import { Area } from '../componentes/Area'

export function Fundamentos(){
    return(
        <div className={style.conteiner}>
            
            <h1 className={style.titulo}>Avaliação PW-II e PAM</h1>
            <h2 className={style.subtitulo}>Crystian Leonardo Souza da Silva</h2>
            <h1 className={style.titulo}>Fórmulas - Física | Química | Matemática</h1>
            
            <div className={style.conteudo}>
                <h2 className={style.subtitulo}>Área do Trapézio</h2>
                <Area/>
            </div>

        </div>

    )
}