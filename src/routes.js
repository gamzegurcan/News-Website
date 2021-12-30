import Home from './components/page/Home';
import News from './components/page/News';
import NewsDetail from './components/page/NewsDetail';
import NewsSearch from './components/page/NewsSearch';
import About from './components/page/About';
import Contact from './components/page/Contact';



const routes = [
  {title: "Home", path:"/", element:Home, isNav:true},
  {title: "About", path:"about", element:About, isNav:true},
  {title: "News", path:"news", element:News, isNav:true},
  {title: "Contact", path:"contact", element:Contact, isNav:true},
  {title: "NewsDetail", path:"news/:params", element:NewsDetail, isNav:false},
  {title: "NewsSearch", path:"/search", element:NewsSearch, isNav:false},
]

export default routes;