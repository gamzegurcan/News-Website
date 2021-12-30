import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

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
      {/* {
        data.map((item,index) => 
        <div className="container mt-3">
          <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <Link className="btn btn-primary" to={`${item.source.id}`}>Read News</Link>
              </div>
            </div>
          </div>
        </div>
        </div>
          
        )
      } */}
    </>
  );
}

export default Home;