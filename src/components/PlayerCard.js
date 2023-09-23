import React, { useState } from "react";

import '../styles/PlayerCard.css';

const PlayerCard = ({player, revealOn}) => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  }

  let roleText = '';
  if (revealOn) {
    if (player.role === 1) {
      roleText = 'Civilian';
    } else if (player.role === -1) {
      roleText = 'Imposter';
    } else {
      roleText = 'Mr. White';
    }
  } else {
    roleText = player.word;
  }

  return (
    <div className="card" onClick={flipCard}>
      <div className="card__content">
        {flipped ? 
        (
          <div className="card__text revealed_text">
            {player.name}
            <div>{roleText}</div>
          </div>
        ) : (
          <div className="card__text">
            {player.name}
          </div>
        )}
      </div>
    </div>
  )
}

export default PlayerCard;
