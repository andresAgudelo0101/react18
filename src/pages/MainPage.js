import {useState,useEffect,useId} from "react";

function MainPage(props) {
    const [ loading, setLoading ] = useState(true)
    const [ pokemon, setPokemon ] = useState(null)
    const randomId = Math.floor(Math.random() * 806 + 1)
    const [ pokemonID, setPokemonId ] = useState(randomId)
    const id=useId();
    let cont=0;

    const getRandomid=(id)=>{
        setPokemonId(id);
    }

    const apiPokemon=async()=>{
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
        .then(res=>res.json())
        .then((data)=>{
            setPokemon(data)
            setLoading(false)
            console.log(data)
        })
        .catch(err=>{
            setLoading(false)
            console.log(err)
        })
        return response;
    }

    useEffect(()=>{
        apiPokemon();
    },[pokemonID])


    return (
        <div className="containerChild">
            <div className="container-img">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`} className="imagen" alt={pokemon?.name} />
            </div>
            <div className="container-pokemones">
                <h1 className="pokemon-name">{pokemon?.name}</h1>
            </div>
                <ul className="pokemon-stats">
                    {pokemon?.stats?.map(item => (
                        <li key={`${id}-${cont++}`}>{item?.stat?.name}{"  "}{item?.base_stat}</li> 
                     ))}
                </ul>
            <button onClick={()=>getRandomid(randomId)} className="btn-random">Ramdon Pokemon</button>
            <div className="container-pokemones">
                <button onClick={props.cambiarTema} className="btn-tema">cambiar tema</button>
            </div>
            
        </div>
    )
}

export default MainPage;
