import {useLocation , useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import BASE_URL from '../../../api'


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
      setData(json.articles)
    })
  }, [])

  function formSubmit(event){
    event.preventDefault();
    setQ(event.target.q.value)
    navigate(`/search?q=${event.target.q.value}`)

  }
return(
 <>
    <form  className="d-flex" onSubmit={formSubmit}>
      <input className="form-control me-2" type="text" name="q" placeholder="Search" id='search' defaultValue={q} aria-label="Search" />
      <button className="btn btn-danger" type="submit">Search</button>
    </form>
    
    {
      location.pathname === "/search" && <h1 className='text-center mt-5'>News{data
        .filter((item) => item.content.includes(q))
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