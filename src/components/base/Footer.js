import routes from '../../routes';
import {Link} from 'react-router-dom';

function Footer(props){
  return(
    <>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            {
                  routes.filter(
                    item => item.isNav
                  ).map(
                    (item,index) =>
                      <li className="nav-item" key={index}><Link className="nav-link px-2 text-muted" to={item.path}>{item.title}</Link></li>)
                }
          </ul>
          <p className="text-center text-muted">© 2021 Company, Inc</p>
        </footer>
</div>
    </>
  );
}

export default Footer;
