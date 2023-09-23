import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import getRoles from "./functions/getRoles";
import PlayerCard from "./PlayerCard";

import '../styles/PlayGameView.css';

const PlayGameView = () => {
  const [revealOn, setRevealOn] = useState(false);
  const [playerRoles, setPlayerRoles] = useState([]);
  const {state} = useLocation();
  const {players, numImposters} = state;

  // let playerRoles = [];

  useEffect(() => {
    setPlayerRoles(getRoles(players, numImposters));
  }, [])
  // const playerRoles = getRoles(players);

  const toggleReveal = () => {
    setRevealOn(!revealOn);
  }

  return (
    <div>
      <div className="cards">
        {
          playerRoles.map((player, i) => (
            <PlayerCard key={i} player={player} revealOn={revealOn} />
          ))
        }
      </div>

      <button className={revealOn ? 'reveal-btn reveal-active': 'reveal-btn'} onClick={toggleReveal}>{revealOn ? 'Revealing':'Reveal Role'}</button>

      <div className="tutorial_text">Click on your card to see your word. Refresh the page for new roles.</div>
    </div>
  )
}

export default PlayGameView;
