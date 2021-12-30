import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import NewsSearch from './NewsSearch';

function Home(props){
  const [data,setData] = useState([])

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4324f59ba29f4d26ae8082b7b1a7f5dd")
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