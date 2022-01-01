import {useState,useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import NewsSearch from './components/NewsSearch';
import BASE_URL from '../../api'
import '../../index';
import NewsCard from './components/NewsCard';
import About from './About';

function Home (props){
  const [data,setData] = useState([])
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
  const pageCount = Math.ceil(data.length / PER_PAGE);

  
  useEffect(() => {
    fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(json => {
    //  console.log(json.articles)
      setData(json.articles)
    })
    .catch(error => console.log('error', error));
  }, [])

  function handlePageClick({ selected: selectedPage })
  {
    setCurrentPage(selectedPage);
  }
   

  return(
    <>
      <NewsSearch/>
      <h1 className="text-center my-5">NEWS</h1>
        <div className="container">
          <div className="row">
            {
              currentPageData.map((item,index) =>
                <div key={index} className="col-md-4 py-3 " >
                  <NewsCard
                    key={index}
                    image={item.urlToImage}
                    title={item.title}
                    author={item.author}
                  >
                  
                  </NewsCard>
                </div>
              )
            }
          </div>
        </div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />  
  
    <About />
    
    </>
  )
            
}
export default Home;