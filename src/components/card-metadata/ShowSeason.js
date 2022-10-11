import React from 'react'
import useFetch from '../useFetch'
import ShowEpisodes from './ShowEpisodes'

function ShowSeason({name,season_number,id_tv}) {
    const {data} = useFetch(`${process.env.REACT_APP_BASE_URL}tv/${id_tv}/season/${season_number}?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_LANGUAGE}`)
  return (
    <div>
        <p>{name}</p>
        {
            data.episodes?.slice(-3).reverse().map((e)=><ShowEpisodes {...e} /> )
        }
    </div>
  )
}

export default ShowSeason