import { useState } from "react";
import { Pokemon } from "../utils/interface";
import Rotate from "../assets/rotate.svg";

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
        <div className="text-5xl">{pokemon.name}</div>
        <div>{!backImage && <img src={pokemon.sprites.front_default} alt={`front image of ${pokemon.name}`} className="w-80 inline-block text-center animate-fade-in" />}</div>
        <div>{backImage && <img src={pokemon.sprites.back_default} alt={`back image of ${pokemon.name}`} className="w-80 inline-block text-center animate-fade-in" />}</div>
        <button type="button" className="bg-red p-2 rounded-full" onClick={(changeImage)}>
          <img src={Rotate} alt="" className="w-6 inline-block fill-white invert rotate-220" />
        </button>
      </>
    </div>
  )
};

export default PokemonCard;
