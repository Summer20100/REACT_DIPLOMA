import sandals_myer from './../../img/products/sandals_myer.jpg'
import sandals_keira from './../../img/products/sandals_keira.jpg'
import space_sneakers from './../../img/products/space_sneakers.jpg'


const Catalog = () => {
  return (
    <main class="container">
      <div class="row">
        <div class="col">
          <section class="catalog">
            <h2 class="text-center">Каталог</h2>
            <form class="catalog-search-form form-inline">
              <input class="form-control" placeholder="Поиск" />
            </form>
            <ul class="catalog-categories nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" href="#">Все</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Женская обувь</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Мужская обувь</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Обувь унисекс</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Детская обувь</a>
              </li>
            </ul>
            <div class="row">
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src={ sandals_myer }
                    class="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                  <div class="card-body">
                    <p class="card-text">Босоножки 'MYER'</p>
                    <p class="card-text">34 000 руб.</p>
                    <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src={ sandals_keira }
                    class="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                  <div class="card-body">
                    <p class="card-text">Босоножки 'Keira'</p>
                    <p class="card-text">7 600 руб.</p>
                    <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src={ space_sneakers }
                    class="card-img-top img-fluid" alt="Супергеройские кеды" />
                  <div class="card-body">
                    <p class="card-text">Супергеройские кеды</p>
                    <p class="card-text">1 400 руб.</p>
                    <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src={ sandals_myer }
                    class="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                  <div class="card-body">
                    <p class="card-text">Босоножки 'MYER'</p>
                    <p class="card-text">34 000 руб.</p>
                    <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src={sandals_keira}
                    class="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                  <div class="card-body">
                    <p class="card-text">Босоножки 'Keira'</p>
                    <p class="card-text">7 600 руб.</p>
                    <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card catalog-item-card">
                  <img src={ space_sneakers }
                    class="card-img-top img-fluid" alt="Супергеройские кеды" />
                  <div class="card-body">
                    <p class="card-text">Супергеройские кеды</p>
                    <p class="card-text">1 400 руб.</p>
                    <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <button class="btn btn-outline-primary">Загрузить ещё</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Catalog
