import { useEffect, useState } from 'react'

const getData = (url) => {
  const [itm, setItm] = useState([])
  
  async function fetchData() {
    await fetch(url)
      .then((response) => {
        if (!response.ok) window.location.href = 'https://reactdiploma.summer20100.repl.co/error404'
          return response.json()
        })
        .then(data => {
          setItm(data)
        })
        .catch((err) => {
          throw new Error('Invalid!')
        })
  }
  useEffect(() =>{
    fetchData()
  }, [url])
  return itm
}

export default getData
  