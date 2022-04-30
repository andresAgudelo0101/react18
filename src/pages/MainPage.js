import {useState,useEffect,useId} from "react"

function MainPage(props) {
    const [ loading, setLoading ] = useState(true)
    const [ pokemon, setPokemon ] = useState(null)
    const RandomId = Math.floor(Math.random() * 806 + 1)
    const [ pokemonID, setPokemonId ] = useState(RandomId)
    const id=useId();
    let cont=0;

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
    }
    useEffect(()=>{
        apiPokemon();
    },[])


    return (
        <div className="containerChild">
            <img src={pokemon?.sprites?.front_default} className="imagen" alt={pokemon?.name}/>
            <h1>{pokemon?.name}</h1>
                <ul className="pokemon-stats">
                    {pokemon?.stats?.map(item => (
                        <li key={`${id}-${cont++}`}>{item?.base_stat}</li> 
                     ))}
                </ul>
            <button>Ramdon Pokemon</button>
            <button onClick={props.cambiarTema}>cambiar fondo</button>
        </div>
    )
}

export default MainPage;
