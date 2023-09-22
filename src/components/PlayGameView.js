import React from "react";
import { useLocation } from "react-router-dom";

import getRoles from "./functions/getRoles";
import PlayerCard from "./PlayerCard";

import '../styles/PlayGameView.css';

const PlayGameView = () => {
  const {state} = useLocation();
  const {players} = state;

  const playerRoles = getRoles(players);

  return (
    <div>
      <div className="cards">
        {
          playerRoles.map((player, i) => (
            <PlayerCard key={i} player={player} />
          ))
        }
      </div>
    </div>
  )
}

export default PlayGameView;
