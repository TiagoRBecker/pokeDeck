import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Sobre.module.css";

const Sobre = () => {
  return (
    <>
      <div className={styles.sobre}>
        <h1>Sobre o projeto!</h1>
        <p>
          
          Projeto elaborado para fixar conhecimentos em nextjs, utilizando rotas
          dinâmicas, fetching data e realizando deploy na vercel
        </p>
        <Image
          src="/images/charizard.png"
          width={400}
          height={400}
          alt="sobre"
        />
        <Link href ="/"><a className={styles.button}>Voltar</a></Link>
      </div>
    </>
  );
};
export default Sobre;
