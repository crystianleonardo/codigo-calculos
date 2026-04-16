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
                <p className={style.texto}>Área = ((b + B) * h) / 2</p>
                <p className={style.texto}>Um trapézio é um quadrilátero definido por possuir dois lados paralelos, conhecidos como base maior e base menor. Os outros dois lados, chamados de oblíquos, conectam as extremidades dessas bases e determinam a inclinação da figura. A distância vertical entre as bases é a altura, elemento fundamental para o cálculo de sua superfície.Para encontrar a área de um trapézio, utiliza-se a fórmula A = (B + b) · h / 2. Na prática, você deve somar as medidas da base maior (B) e da base menor (b), multiplicar esse resultado pela altura (h) e, por fim, dividir o valor total por dois. Essa fórmula permite calcular o espaço interno da figura de forma rápida e precisa para qualquer um de seus tipos, seja ele retângulo, isósceles ou escaleno.</p>
                <Area/>
            </div>

        </div>

    )
}