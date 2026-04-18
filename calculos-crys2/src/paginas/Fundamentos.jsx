import style from './Fundamentos.module.css'
import { Area } from '../componentes/Area'
import { VEntalpia } from '../componentes/Entalpia'
import { Temperatura } from '../componentes/Temperatura'

export function Fundamentos(){
    return(
        <div className={style.conteiner}>
            
            <h1 className={style.titulo}>Avaliação PW-II e PAM</h1>
            <h2 className={style.subtitulo}>Crystian Leonardo Souza da Silva - 2DSAA</h2>
            <h1 className={style.titulo}>Fórmulas - Física | Química | Matemática</h1>
            
            <div className={style.conteinerConteudo}>
            <div className={style.conteudo}>
                <h2 className={style.subtitulo}>Área do Trapézio | A = (B + b) * h /2</h2>
                <p className={style.texto}>Para encontrar a área de um trapézio, utiliza-se a fórmula A = (B + b) * h /2. Na prática, você deve somar as medidas da base maior (B) e da base menor (b), multiplicar esse resultado pela altura (h) e, por fim, dividir o valor total por dois. Essa fórmula permite calcular o espaço interno da figura de forma rápida e precisa para qualquer um de seus tipos, seja ele retângulo, isósceles ou escaleno.</p>
                <Area/>
            </div>
            
            <div className={style.conteudo}>
                <h2 className={style.subtitulo}>Variação da Entalpia | ΔH = Hprodutos - Hreagentes</h2>
                <p className={style.texto}>A variação de entalpia (ΔH) é uma medida da quantidade de calor trocada em um processo químico que ocorre a pressão constante. Quando ΔH é positivo, a reação é endotérmica (absorve calor); quando ΔH é negativo, a reação é exotérmica (libera calor). Ela é calculada pela diferença entre a entalpia dos produtos e a entalpia dos reagentes, e pode indicar se uma reação é endotérmica ou exotérmica.</p>
                <VEntalpia/>
            </div>
            
            <div className={style.conteudo}>
                <h2 className={style.subtitulo}>Fahrenheint para Celsius | °C = (°F - 32) * 5/9</h2>
                <p className={style.texto}>A fórmula para converter Fahrenheit para Celsius é: C = (F - 32) * 5/9. Essa fórmula é uma representação matemática da conversão entre as duas escalas de temperatura, onde "°C" representa a temperatura em Celsius e "(°F)" representa a temperatura em Fahrenheit. A fórmula é uma representação da relação entre os pontos de congelamento e ebulição da água nas duas escalas, ajustando o deslocamento e a proporção entre os intervalos de temperatura. A escala Celsius é mais utilizada na maioria dos países do mundo, enquanto a escala Fahrenheit é mais comum nos Estados Unidos.</p>
                <Temperatura/>
            </div>
            </div>

        </div>

    )
}