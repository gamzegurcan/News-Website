import {useLocation , useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import BASE_URL from '../../api'

function NewsSearch(props){

  const location = useLocation();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(location.search)
  const [q, setQ] = useState(urlParams.get('q'))
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

  function formSubmit(event){
    event.preventDefault();
    setQ(event.target.q.value)
    navigate(`/search?q=${event.target.q.value}`)

  }
return(
 <>
    <form m-5 className="d-flex" onSubmit={formSubmit}>
      <input className="form-control me-2" type="text" name="q" placeholder="Search" id='search' defaultValue={q} aria-label="Search" />
      <button className="btn btn-outline-danger" type="submit">Search</button>
    </form>
    {
      location.pathname === "/search" && <h1>News: {data
        .filter((item) => item.content.includes(q))
        .map((item) => (
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={item.urlToImage} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <h6 class="card-text">{item.description}</h6>
                  <p class="card-text"><small class="text-muted">{item.publishedAt}</small></p>
                </div>
              </div>
            </div>
          </div>
        ))}</h1>
    }
 </>
);
 
}

export default NewsSearch;