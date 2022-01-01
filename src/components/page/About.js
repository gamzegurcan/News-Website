function About(props){
  const technologies = [
    { id: 1, title: "React Paginate", url:"https://www.npmjs.com/package/react-paginate" },
    { id: 2, title: "React", url:"https://reactjs.org/" },
    { id: 3, title: "Bootstrap 5", url:"hhttps://getbootstrap.com/" },
    { id: 4, title: "React Router Dom", url:"https://reactrouterdotcom.fly.dev/docs/en/v6" },
  ]
  
  return(
    <>
      <section className="text-secondary my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7 mt-5">
            <h2 className="text-danger">Project Details</h2>
            <p>In this assignment, I tried to build a dummy amazon clone.<br /> Well, I know that it looks like nonprofessional<br /></p>
            <p>I used Fake Store data. I got data from there and used it with JSON-Server. <br /> Why did I do this? <br /> I just wanted to try JSON-Server and its API that Fake Store API doesn't have.</p>
            <p>You can see all products, search specific product and display each product details.</p>
          </div>
          <div className="col-md-5 drop-cap-text mt-5">
            <h2 className="text-danger">Technologies That I Used</h2>
            <div className="list-group">
            {technologies.map(data =>
                <a href={data.url} key={data.id} target="_blank" rel="noopener   noreferrer" className="list-group-item list-group-item-action list-group-item-light">
                  {data.title}
                </a>)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;