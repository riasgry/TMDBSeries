import React, { useEffect, useState} from 'react'
import ShowList from './ShowList'
import useFetch from './useFetch'

function NowPlaying() {
  const [page, setPage]=useState(1)
  const [a, setA] = useState([])
  const {data} = useFetch(`${process.env.REACT_APP_BASE_URL}tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=`+page)
  useEffect(()=>{
    let newData = []
    data.results?.map(a=>newData.push(a))
    setA(oldArray=>[...oldArray,...newData])
  },[data])
  const handleClick = (e) => {
    setPage(page+1)
  }
  
  
  return (
    <div className='container glass'>
    
    <h2>Now Playing</h2>
    <div className="normal-list">
        {
            a?.map((datas)=><ShowList key={datas.id} {...datas} />)
        }
      
    </div>
    <button className='button-load glass' onClick={handleClick}>Load More?</button>
       
    </div>
  )
}

export default NowPlaying