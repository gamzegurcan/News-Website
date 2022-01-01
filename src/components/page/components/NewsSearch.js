import {useLocation , useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import BASE_URL from '../../../api'
import NotFound from './NotFound';


function NewsSearch(props){

  const location = useLocation();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(location.search)
  const [q, setQ] = useState(urlParams.get('q'))
  const [data,setData] = useState([])
  const filteredData = data
  .filter((item) => item.content.includes(q))

  useEffect(() => {
    fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(json => {
    //  console.log(json.articles)
      setData(json.articles)
    })
    .catch(error => console.log('error', error));
  }, [])

  function formSubmit(event){
    event.preventDefault();
    setQ(event.target.q.value)
    navigate(`/search?q=${event.target.q.value}`)

  }
  console.log(filteredData)
return(
 <>
    <form  className="d-flex" onSubmit={formSubmit}>
      <input className="form-control me-2" type="text" name="q" placeholder="Search" id='search' defaultValue={q} aria-label="Search" />
      <button className="btn btn-outline-danger" type="submit">Search</button>
    </form>
    {
      (filteredData.length === 0 && location.pathname === "/search") && <div>
        <NotFound />
      </div>
    }
    {
      location.pathname === "/search" && <h1>News: {filteredData
        .map((item,index) => (
          <div key={index} className="card m-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.urlToImage} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-text">{item.description}</h6>
                  <p className="card-text"><small className="text-muted">{item.publishedAt}</small></p>
                </div>
              </div>
            </div>
          </div>
        )) }</h1>
    }
 </>
);
 
}

export default NewsSearch;