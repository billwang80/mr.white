import React from 'react';

import '../styles/PlayerInput.css';

const PlayerInput = ({player}) => {

  return (
    <div className='playerInput'>
      <div className='playerInput_text'>{player.name}</div>
      {/* <div>Remove</div> */}
    </div>
  )

}

export default PlayerInput
