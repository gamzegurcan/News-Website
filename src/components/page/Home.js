import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import NewsSearch from './NewsSearch';
import BASE_URL from '../../api'

function Home(props){
  const [data,setData] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(json => {
    //  console.log(json.articles)
      setData(json.articles)
    })
    .catch(error => console.log('error', error));
  }, [])

  return(
    <>
      <NewsSearch props={props}/>
    </>
  );
}

export default Home;