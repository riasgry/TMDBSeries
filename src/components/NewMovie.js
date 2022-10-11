import React, { useEffect } from 'react'
import ShowList from './ShowList'
import useFetch from './useFetch'

function NewMovie() {
    const {data} = useFetch(`${process.env.REACT_APP_BASE_URL}tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    useEffect(()=>{
      const item = document.getElementsByClassName('horizontal-list')[0]
      item.addEventListener("wheel", function (e) {
          if (e.deltaY > 0) {
            item.scrollLeft += 30;
            e.preventDefault()
          }
          else {
            item.scrollLeft -= 30;
            e.preventDefault()
          }
        });
      
     },[])
  return (
    <div className='container glass'>
    <h2>Popular</h2>
    <div className="horizontal-list">
        {
            data.results?.map((datas)=><ShowList key={datas.id} {...datas} />)
        }
        
    </div>

    
       
    </div>
  )
}

export default NewMovie