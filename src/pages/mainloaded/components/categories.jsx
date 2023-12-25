import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Categories = ({id, title, onFilter, ind}) => {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState("nav-link")

  const [activeItem, setActiveItem] = useState(0);
  const handleItemClick = (index) => { setActiveItem(index) };


  useEffect(() => {
    if (count === 1) {
      setActive("nav-link active")
      console.log('count>>>', title, count)
      
    }
    if (count > 1) {
      setCount(0)
      setActive("nav-link")
      console.log('count>>>', title, count)
    }
  }, [count])
  
  return (
    <>

      {/* <li className="nav-item" onClick={() => handleItemClick(ind + 1)} >
        <Link className={activeItem === ind + 1 ? 'nav-link active' : 'nav-link'} href="#"
          onClick={ev => {
            onFilter(id)
        }}
        >{ title }</Link>
      </li> */}


      
      <li className="nav-item">
        <Link className={ active } href="#" onClick={(ev) => { 
          onFilter(id),
          setCount(prev => prev + 1)
        }}>{ title }</Link>
      </li>
    </>
   
  )
}

export default Categories
   