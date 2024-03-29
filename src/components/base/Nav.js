import routes from '../../routes';
import {Link} from 'react-router-dom';


function Nav(props){
  return(
    <>
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-danger text-decoration-none">
        <span className="fs-4">BBC NEWS</span>
      </a>

      <ul className="nav nav-pills">
      {
          routes.filter(
            item => item.isNav
          ).map(
            (item,index) =>
              <li className="nav-item" key={index}><Link className="nav-link" to={item.path}>{item.title}</Link></li>
          )
        }
      </ul>
    </header>
  </div>
  </>
  );
}

export default Nav;