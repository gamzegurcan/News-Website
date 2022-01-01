// import { Link } from "react-router-dom"

const NewsCard = (props) => {
  const {image, title, author} = props
return <>
  <div className="card py-3 h-100">
    <img className="card-img-top mx-auto" src={image} alt="Card" />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
      <p className="card-text text-truncate" style={{}}>{author}</p>
      </div>
      {/* <Link to={`${item.publishedAt}`}className="btn btn-dark w-75 mx-auto">Details</Link> */}
  </div>
</>
}
export default NewsCard