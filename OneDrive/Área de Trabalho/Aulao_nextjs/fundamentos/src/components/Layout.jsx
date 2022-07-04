import Link from "next/link"
import styles from '../styles/Layout.module.css'

export default function Layout(abc) {
    
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{abc.titulo ?? 'Mais Exemplos'}</h1>
            <Link href="/">Voltar</Link>
            </div>
            <div className={styles.conteudo}>
            {abc.children}
            </div>
        </div>
    )
} 