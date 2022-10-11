import React from 'react'
import useFetch from '../useFetch'
import ShowSeason from './ShowSeason'

function CardDetail({id_data}) {
  const {data} = useFetch(`${process.env.REACT_APP_BASE_URL}tv/${id_data}?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_LANGUAGE}`)
  
  return (
    <div className='card-detail'>

      {
        data.seasons?.filter(name=>name.episode_count!==0).slice(-1).map((e)=> <ShowSeason id_tv={id_data} {...e} /> )
      }
    
    </div>
  )
}

export default CardDetail