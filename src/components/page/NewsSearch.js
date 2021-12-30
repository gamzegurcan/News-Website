import {useLocation , useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';

function NewsSearch(props){

  const location = useLocation();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(location.search)
  const [q, setQ] = useState(urlParams.get('q'))
  const [data,setData] = useState([])

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=apple&apiKey=4324f59ba29f4d26ae8082b7b1a7f5dd")
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
    <form className="d-flex" onSubmit={formSubmit}>
      <input className="form-control me-2" type="text" name="q" placeholder="Search" id='search' defaultValue={q} aria-label="Search" />
      <button className="btn btn-outline-danger" type="submit">Search</button>
    </form>
    {
      location.pathname === "/search" && <h1>Search Results: {data
        .filter((item) => item.content.includes(q))
        .map((item) => (
          <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}</h1>
    }
 </>
);
 
}

export default NewsSearch;