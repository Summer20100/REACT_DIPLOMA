import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const Itm = ({images, title, price}) => {
  return (
    <div className="col-4">
      <div className="card">
        <Image src={ images[0] }
         className="card-img-top img-fluid" alt={ title } />
          <div className="card-body">
            <p className="card-text">{ title }</p>
            <p className="card-text">{ price } руб.</p>
            <Link to="/product" className="btn btn-outline-primary">Заказать</Link>
          </div>
      </div>
    </div>
  )
}

export default Itm