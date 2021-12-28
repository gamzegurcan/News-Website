import routes from '../../routes';
import {Link} from 'react-router-dom';


function Nav(props){
  return(
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          NEWS
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
          routes.filter(
            item => item.isNav
          ).map(
            (item,index) =>
              <li className="nav-item" key={index}><Link className="nav-link" to={item.path}>{item.title}</Link></li>
          )
        }
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-danger" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  </>
  );
}

export default Nav;