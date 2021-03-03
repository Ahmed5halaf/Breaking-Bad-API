import React, {useState , useEffect} from 'react'
import axios from 'axios'
import Header from './component/ui/Header'
import Characters from './characters/charactersGrid'
import Search from './component/ui/Search'
import './App.css'


const App = () => {
  const [items ,setItems] = useState([])
  const [isLoding , setIsLoding] = useState(true)
  const [query , setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios (

        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      //console.log(result.data);

      setItems(result.data)
      setIsLoding(false)
    }
    fetchItems()
  }, [query])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <Characters isLoding={isLoding} items={items}/>
    </div>
  );
}

export default App;
