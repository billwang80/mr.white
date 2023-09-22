import React, { useState } from "react";

import '../styles/PlayerCard.css';

const PlayerCard = (player) => {
  const [flipped, setFlipped] = useState(false);
  const player_data = player.player;
  // console.log(player_data.name);

  const flipCard = () => {
    setFlipped(!flipped);
  }

  return (
    <div className="card" onClick={flipCard}>
      <div className="card__content">
        {flipped ? 
        (
          <div className="card__text revealed_text">
            {player_data.word}
          </div>
        ) : (
          <div className="card__text">
            {player_data.name}
          </div>
        )}
      </div>
    </div>
  )
}

export default PlayerCard;
