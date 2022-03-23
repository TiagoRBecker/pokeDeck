import Image from "next/image";
import styles from "../styles/Index.module.css"
export default function Home() {
  return (
     <div className={styles.container}>
      <Image src={"/images/bg.jpg"} width={1480} height={630} alt="bg"/>
     </div>
    
  )
}
