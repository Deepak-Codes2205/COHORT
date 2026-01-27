import  {useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './components/Cards'
const App = () => {

  const [allData, setAllData] = useState([])
  const getData = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    //console.log(response);
    console.log(response.data);
    setAllData(response.data)
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <div className='all-cards'>
        {allData.map(function(elem, idx){
          return <div key={idx}>
              <Cards elem={elem}></Cards>
          </div>
        })}
      </div>
    </div>
  )
}

export default App

