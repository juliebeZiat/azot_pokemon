import { useState } from "react";
import { Pokemon } from "../utils/interface";

interface Props {
  pokemon: Pokemon;
}


const PokemonCard = ({ pokemon }: Props) => {
  const [backImage, setBackImage] = useState(false);

  const changeImage = () => {
    setBackImage(!backImage);
  }

  return (
    <div>
      <>
        <div>{pokemon.name}</div>
        {!backImage && <img src={pokemon.sprites.front_default} alt="" />}
        <button onClick={(changeImage)}>X</button>
        {backImage && <img src={pokemon.sprites.back_default} alt="" />}
      </>
    </div>
  )
};

export default PokemonCard;
