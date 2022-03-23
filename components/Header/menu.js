import Link from "next/link"
import styles from "../../styles/Menu.module.css"
import Image from "next/image"
const Menu = ()=>{
    return(
    <nav className={styles.nav}>
       
        <div className={styles.logo}>
         <Image src="/images/pokeball.png" width={30} height={30} alt="Logo pokemon "/>
         <span className={styles.span}>Poke Deck</span>
        </div>
        
        <ul className={styles.ul}>
        <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/deck"><a>Deck</a></Link></li>
            <li><Link href="/sobre"><a>Sobre</a></Link></li>
        </ul>
    </nav>
    )
}
export default Menu;