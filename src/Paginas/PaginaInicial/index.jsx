import Cabecalho from "Componentes/Cabecalho";
import Menu from "Componentes/Menu";
import Banner from 'Componentes/Banner'
import styles from './PaginaInicial.module.scss'
import Rodape from "Componentes/Rodape";
import Galeria from "Componentes/Galeria";
import Populares from "Componentes/Populares";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <Banner/>
                </section>
            <div className={styles.galeria}>
                <Galeria/>
                <Populares/>
            </div>    
            </main>
            
            <Rodape/>
        </>
    )
}