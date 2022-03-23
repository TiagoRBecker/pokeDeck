import styles from "../../styles/Id.module.css";
import Image from "next/image";
import Link from "next/link";
export const getStaticPaths = async () => {
  const maxPokemon = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemon}`);
  const data = await res.json();
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokeId:( index + 1 ).toString() },
    };
  });
  return {
    paths,
    fallback: false
  };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokeId}`);
  const json = await res.json();
  return {
    props: { pokemon: json },
  };
};
const Id = ({ pokemon }) => {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles["type_" + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
      <div className={styles.margin}>
      <Link href="/deck">
        <a className={styles.button}>Voltar</a>
      </Link>
      </div>
    </div>
  );
};
export default Id;
