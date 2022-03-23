import Image from "next/image";
import Link from "next/link"
import styles from "../../styles/Card.module.css";
const Card = ({ pokemon }) => {
  return (
    <div className={styles.boxItem}>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.name}>{pokemon.name}</h3>
      <div>Description</div>
      <Link href={`/pokemon/${pokemon.id}`}><button className={styles.btn}>Detalhes..</button></Link>
    </div>
  );
};
export default Card;
