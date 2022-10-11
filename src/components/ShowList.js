import React from 'react'
import CardDetail from './card-metadata/CardDetail';
import useFetch from './useFetch';

function ShowList({id, name, poster_path,vote_average,genre_ids,}) {
    const poster = `${process.env.REACT_APP_POSTER_PATH}`+poster_path
    const {data}= useFetch(`${process.env.REACT_APP_BASE_URL}genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_LANGUAGE}`);
    const Genre=genre_ids.map(id => data.genres?.find(genre => genre.id === id))
    

  return (
    <div className="container-card">
      <div className='card-show'>
        <img src={poster} alt="" />
        <div className="element">
          <p className='name'>{name}</p>
          <div className="genre ">
              {Genre.map((i,x)=><button key={i?.id}>{i?.name}</button>)}
          </div>
          <p className="vote"><i>score :  {vote_average}</i></p>
        </div>
      </div>
      
       {/* <CardDetail key={id} id_data={id}  /> */}
        
    </div>
    
  )
}

export default ShowList