import Itm from './itm'
import sandals_myer from './../../../img/products/sandals_myer.jpg'
import sandals_keira from './../../../img/products/sandals_keira.jpg'
import space_sneakers from './../../../img/products/space_sneakers.jpg'


const TopSales = ({ topsalesItm }) => {
  
  // const setTopsalesItm = topsalesItm.map((el,ind) => <Itm key={ el.id } {...el} /> )
  // console.log(setTopsalesItm)
  
  return (
    <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
              <div className="col-4">
                <div className="card">
                  <img src={ sandals_myer }
                    className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                  <div className="card-body">
                    <p className="card-text">Босоножки 'MYER'</p>
                    <p className="card-text">34 000 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img src={ sandals_keira }
                    className="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                  <div className="card-body">
                    <p className="card-text">Босоножки 'Keira'</p>
                    <p className="card-text">7 600 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img src={ space_sneakers }
                    className="card-img-top img-fluid" alt="Супергеройские кеды" />
                  <div className="card-body">
                    <p className="card-text">Супергеройские кеды</p>
                    <p className="card-text">1 400 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default TopSales
