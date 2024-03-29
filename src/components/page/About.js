import ProjectDetail from "./components/ProjectDetail";
import {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import technologies from "./components/technologies";

function About(props){
  const [show, setShow] = useState(true)
  const location = useLocation()

  useEffect(() =>
  {
    if (location.pathname === "/")
    {
      setShow(false)
    }
  }, [location.pathname])
  
  return(
    <>
      {
        show && <ProjectDetail />
      }
      <section className="text-secondary my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 mt-5">
              <h2 className="text-danger">Project Details</h2>
              <p>In this assignment, I tried to build a news app like BBC NEWS.<br />I used News API for this.<br /></p>
              <p className="card-text"><a href='https://newsapi.org/docs/get-started' target="_blank" rel="noopener noreferrer">News API</a></p>
              <p>You can see all the news on this site and go to the details and search for the news.</p>
            </div>
            <div className="col-md-5 drop-cap-text mt-5">
              <h2 className="text-danger">Technologies</h2>
                <ul>
                  {
                    technologies.map((item, index) =>
                      <li key={index}><a href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a></li>
                    )
                  }
                </ul>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}

export default About;
