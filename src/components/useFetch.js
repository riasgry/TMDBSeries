import axios from 'axios'
import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [load,setLoading] = useState(false)
  const [error,setError] = useState('')

  useEffect(()=>{
    setLoading(true);
    axios.get(url).then((response)=>{
      setData(response.data);
    }).catch((err)=>{
      setError(err)
    }).finally(()=>{
      setLoading(false);
    })

}, [url]);

return {data, load, error};
}

export default useFetch