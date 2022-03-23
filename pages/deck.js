import Card from "../components/Card/card"

import Image from "next/image"

import styles from "../styles/Home.module.css"
export const getStaticProps = async () =>{
    const maxPokemon = 251
    const api = 'https://pokeapi.co/api/v2/pokemon/'
    const res = await fetch(`${api}/?limit=${maxPokemon}`)
    const data = await res.json()
    data.results.forEach((pokemon, indice) => {
        pokemon.id = indice + 1
     
    });
    return {
        props:{
            data
        }
        
    }
}
const Home = ({data})=>{

    return (
        <>
        <div className={styles.title} >
        <h2 className={styles.h2}>Poke <span className={styles.span}>Deck</span> </h2>
        <Image src="/images/pokeball.png" width={50} height={50} alt="icon"/>
        </div>
        <div className={styles.box}>
       
        {data.results.map((pokemon, index)=>(
               
               <Card key={index} pokemon={pokemon}/>
               
             ))}
               </div>
        </>
    )
}
export default Home;