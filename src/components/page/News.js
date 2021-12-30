import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../../api'

function News(props){
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    
    setTimeout(() =>{
      
      fetch(`${BASE_URL}`)
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