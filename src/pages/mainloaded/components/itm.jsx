import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Itm = ({images, title, price, id}) => {

  return (
    <div className="col-4 mb-4">
      <div className="card justify-content-between h-100">
        <img src={ images.length === 3 ? images[1] : images[0] } className="card-img-top img-fluid" alt={ title } />
        <div className="card-body" style={{flex: 'inherit'}}>
          <p className="card-text">{ title }</p>
          <p className="card-text">{ price } руб.</p>
          <Link to={"/catalog/" + id} className="btn btn-outline-secondary">Заказать</Link>
        </div>
      </div>
    </div>
  )
}

export default Itm