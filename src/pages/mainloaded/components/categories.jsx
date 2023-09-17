import { Link } from 'react-router-dom'

const Categories = ({id, title}) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" href="#" >{ title }</Link>
    </li>
  )
}

export default Categories
   