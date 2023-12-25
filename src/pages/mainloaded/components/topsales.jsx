import Itm from './itm'

const TopSales = ({ topsalesItm }) => {
  
  const setTopsalesItm = topsalesItm.map((el,ind) => <Itm key={ el.id } {...el} /> )
  
  return (
    <>
      <div className="row">
        { setTopsalesItm }
      </div>
    </>
  )
}

export default TopSales
