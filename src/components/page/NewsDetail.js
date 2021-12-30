import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

function NewsDetail(props){

  const params = useParams()
  const [data,setData] = useState([])
  
  useEffect(() => {
      const URL= 'https://newsapi.org/v2/everything?q=apple&apiKey=4324f59ba29f4d26ae8082b7b1a7f5dd'
      fetch(URL)
        .then(response => response.json())
        .then(json => {
          setData(json.articles.filter(item => item?.publishedAt?.includes(params.params)))
          // console.log(params.params)
        })
  },[params])
  
  return(
    <>
      <h1 className='m-3'>News Detail</h1>
      {
        data?.map((news,index) =>
          <div key={index} className="card mb-3">
            <img src={news.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.description}</p>
                <p className="card-text">{news.content}</p>
                <p className="card-text"><a href={news.url} target="_blank" rel="noopener noreferrer">{news.url}</a></p>
                <p className="card-text"><small className="text-muted">Published: {news.publishedAt}</small></p>
              </div>
          </div>
        )
      }     
    </>
  );
}

export default NewsDetail;