import styles from "../../styles/Main.module.css"
import Menu from "../Header/menu"
import Footer from "../Footer/footer"
import Head from "next/head"

const Main = ({children})=>{
    return(
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico"/>
            <title>Pokemon Deck</title>
        </Head>
        <Menu/>
        <div className={styles.main}>
            {children}
        </div>
        <Footer/>
        </>
    )
}
export default Main;