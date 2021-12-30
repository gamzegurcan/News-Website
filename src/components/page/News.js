import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function News(props){
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    
    setTimeout(() =>{
      const URL= 'https://newsapi.org/v2/everything?q=apple&apiKey=4324f59ba29f4d26ae8082b7b1a7f5dd'
      fetch(URL)
        .then(response => response.json())
        .then(json => {
          setData(json.articles)
          setLoading(false)
        })
    }, 1000)
  },[])

  const loadingReturnInfo = <h1>Yükleniyor...</h1>

  if(loading){
    return loadingReturnInfo
  }
  

  return(
    <>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Detail</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map((item,index) =>
              <tr key={index}>
                <th scope="row"></th>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td><Link to={`${item.publishedAt}`} >Read More...</Link></td>
              </tr>
            )
          }
          </tbody>
        </table>
    </>
  );
  
}

export default News;