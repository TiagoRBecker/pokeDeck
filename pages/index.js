import Image from "next/image";
import styles from "../styles/Bg.module.css"
export default function Home() {
  return (
     <div className={styles.container}>
      <img src="/images/bg.jpg" alt ="fundo"/>
     </div>
    
  )
}
