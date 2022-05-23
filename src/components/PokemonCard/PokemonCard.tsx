import { useState } from "react";
import { Pokemon } from "../../utils/interface";
import { ReactComponent as RotateIcon } from "../../assets/rotate.svg";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  // Creation of a state to get the front or back image when clicked on the button 'Rotate'
  const [backImage, setBackImage] = useState(false);
  const imageSource = backImage ? pokemon.sprites.back_default : pokemon.sprites.front_default;

  const changeImage = () => {
    setBackImage(!backImage);
  }

  return (
    <div>
      <h2 className="text-5xl">{pokemon.name}</h2>
      <div className="h-64">
        <img src={imageSource} alt={`front image of ${pokemon.name}`} className="w-80 inline-block text-center animate-fade-in" />
      </div>
      <button type="button" className="bg-red p-2 rounded-full" onClick={(changeImage)}>
        <RotateIcon className="w-6 inline-block fill-white invert rotate-220" />
      </button>
    </div>
  )
};

export default PokemonCard;
