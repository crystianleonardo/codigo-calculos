import style from './Area.module.css'

export function Area(){
    return(
        <form className={style.conteiner}>
            <div className={style.conteinerRotulo}>
                <p className={style.rotulo}>Base</p>
                <p className={style.rotulo}>Altura</p>
                <p className={style.rotulo}> / 2</p>
            </div>
        </form>
    )
}
