import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

function NewsDetail(props){

  const params = useParams()
  const [data,setData] = useState([])
  //const [filteredData, setFilteredData] = useState([])
 

  function getData(){
    const URL= `https://newsapi.org/v2/top-headlines?country=us&apiKey=4324f59ba29f4d26ae8082b7b1a7f5dd`
    fetch(URL)
      .then(response => response.json())
      .then(json => 
        setData(json.articles)
      )
  }
  
  useEffect(() => {
    getData()
    
  },[params])

  return(
    <>
      <h1>News Detail</h1>
      {
        data.filter(item => item.author.includes(params)).map(news =>
          <div>{news.title}</div>
          )

      }
           
    </>
  );
}

export default NewsDetail;