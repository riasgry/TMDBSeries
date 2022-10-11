import React from 'react'

function ShowEpisodes({episode_number, name, air_date}) {
  return (
    <div className='episodes'>
        <p>Episode {episode_number}</p>
        <p>{air_date}</p>
    </div>
  )
}

export default ShowEpisodes