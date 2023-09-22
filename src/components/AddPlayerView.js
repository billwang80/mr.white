import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PlayerInput from './PlayerInput';

import '../styles/AddPlayerView.css';

const AddPlayerView = () => {
  const [players, setPlayers] = useState([])
  const [name, setName] = useState('')

  const navigate = useNavigate();

  function handleInputName(e) {
    setName(e.target.value)
  }

  function addPlayer(e) {
    const newList = [...players, {
      name: name,
    }]

    setPlayers(newList)
    setName('')
  }

  function startGame() {
    if (players.length >= 4) {
      navigate('/play', { state: { players: players } })
    } else {
      alert("Not enough players!")
    }
  }

  return (
    <div>
      <div>
        <input type='text' value={name} onChange={handleInputName} />
        <button type='button' onClick={addPlayer}>
          Add
        </button>
      </div>

      <div className='player_container'>
        {
          players.map((player, i) => (
            <PlayerInput key={i} player={player} />
          ))
        }
      </div>

      <button type='button' className='start_btn' onClick={startGame}>
        Start
      </button>
    </div>
  )

}

export default AddPlayerView
