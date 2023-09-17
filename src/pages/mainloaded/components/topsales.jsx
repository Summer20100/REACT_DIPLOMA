import Itm from './itm'

const TopSales = ({ topsalesItm }) => {
  const setTopsalesItm = topsalesItm.map((el,ind) => <Itm key={ el.id } {...el} /> )
  
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        { setTopsalesItm }
      </div>
    </section>
  )
}

export default TopSales
