import routes from '../../routes';
import {Link} from 'react-router-dom';


function Nav(props){
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
        <div className="navbar">
          {
            routes.filter(
              item => item.isNav
            ).map(
              (item,index) =>
                <li key={index}><Link to={item.path}>{item.title}</Link></li>)
          }
         
        </div>
      </nav>
    </>
  );
}

export default Nav;