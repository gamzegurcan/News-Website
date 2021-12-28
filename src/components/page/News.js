import {useState,useEffect} from 'react';

function News(props){
  const [data,setData] = useState([])

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eadd6a5170a44c8bb9c90ccead0e427d")
    .then(response => response.json())
    .then(json => {
      // console.log(json.articles)
      setData(json.articles)
    })
    .catch(error => console.log('error', error));
  }, [])

  return(
    <>
     <h1>News</h1>
     {
       data.map(item => <li>{item.title}</li>)
     }
     {/* <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
</div> */}
        
    </>
  );
  
}

export default News;