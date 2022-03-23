import styles from "../../styles/Footer.module.css"
import Image from "next/image"
const Footer = ()=>{
    return(
        <>
        <footer className={styles.footer}>
            <span className={styles.span}>Projeto baseado em NextJs &copy; 2022</span>
            <Image src="/images/pokeball.png" width={30} height={30} alt = "logo pokemon"/>
        </footer>
        </>
    )
}
export default Footer;