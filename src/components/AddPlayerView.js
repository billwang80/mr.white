import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PlayerInput from './PlayerInput';

import '../styles/AddPlayerView.css';

const AddPlayerView = () => {
  const [players, setPlayers] = useState([])
  const [name, setName] = useState('')
  const [numImposters, setNumImposters] = useState(0)
  const [numInput, setNumInput] = useState(0)

  const navigate = useNavigate();

  const handleInputNum = (e) => {
    setNumInput("" + Number(e.target.value))
  }

  const setImposters = () => {
    if (numInput > ((players.length - 1) / 2)) {
      alert("Not enough players for " + numInput + " imposters!")
    } else {
      setNumImposters(numInput)
      setNumInput('')
    }
  }

  const handleInputName = (e) => {
    setName(e.target.value)
  }

  const addPlayer = (e) => {
    const newList = [...players, {
      name: name,
    }]

    setPlayers(newList)
    setName('')
  }

  const startGame = () => {
    if (players.length >= 4) {
      navigate('/play', { state: { players: players, numImposters: numImposters } })
    } else {
      alert("Not enough players!")
    }
  }

  let imposterText = ''
  if (numImposters != 0) {
    imposterText = '(' + numImposters + ' Imposters)'
  } else {
    imposterText = 'Default'
  }

  return (
    <div>
      <div>
        <div className='input_prompt'>How many imposters? {imposterText}</div>

        <input type='number' value={numInput} onChange={handleInputNum} />
        <button type='button' onClick={setImposters}>
          Set
        </button>
      </div>

      <div>
        <div className='input_prompt'>Enter player names</div>
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
