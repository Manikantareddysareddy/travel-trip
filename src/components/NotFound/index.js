import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1715068495/Group_7520NotFound_nqpoa8.png"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="notFound-heading">Page Not Found</h1>
    <p className="notFound-para">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
