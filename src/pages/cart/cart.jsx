

const Cart = () => {
  return (
    <>
    <header className="container">
    <div className="row">
      <div className="col">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src="./img/header-logo.png" alt="Bosa Noga"/>
          </a>
          <div className="collapase navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Главная</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/catalog.html">Каталог</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about.html">О магазине</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacts.html">Контакты</a>
              </li>
            </ul>
            <div>
              <div className="header-controls-pics">
                <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                <div className="header-controls-pic header-controls-cart">
                  <div className="header-controls-cart-full">1</div>
                  <div className="header-controls-cart-menu"></div>
                </div>
              </div>
              <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                <input className="form-control" placeholder="Поиск" />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <main className="container">
    <div className="row">
      <div className="col">
        <div className="banner">
          <img src="./img/banner.jpg" className="img-fluid" alt="К весне готовы!" />
          <h2 className="banner-header">К весне готовы!</h2>
        </div>
        <section className="cart">
          <h2 className="text-center">Корзина</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Размер</th>
                <th scope="col">Кол-во</th>
                <th scope="col">Стоимость</th>
                <th scope="col">Итого</th>
                <th scope="col">Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td><a href="/products/1.html">Босоножки 'MYER'</a></td>
                <td>18 US</td>
                <td>1</td>
                <td>34 000 руб.</td>
                <td>34 000 руб.</td>
                <td><button className="btn btn-outline-danger btn-sm">Удалить</button></td>
              </tr>
              <tr>
                <td colspan="5" className="text-right">Общая стоимость</td>
                <td>34 000 руб.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="order">
          <h2 className="text-center">Оформить заказ</h2>
          <div className="card" style="max-width: 30rem; margin: 0 auto;">
            <form className="card-body">
              <div className="form-group">
                <label for="phone">Телефон</label>
                <input className="form-control" id="phone" placeholder="Ваш телефон" />
              </div>
              <div className="form-group">
                <label for="address">Адрес доставки</label>
                <input className="form-control" id="address" placeholder="Адрес доставки" />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="agreement" />
                <label className="form-check-label" for="agreement">Согласен с правилами доставки</label>
              </div>
              <button type="submit" className="btn btn-outline-secondary">Оформить</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  </main>
  <footer className="container bg-light footer">
    <div className="row">
      <div className="col">
        <section>
          <h5>Информация</h5>
          <ul className="nav flex-column">
            <li className="nav-item"><a href="/about.html" className="nav-link">О магазине</a></li>
            <li className="nav-item"><a href="/catalog.html" className="nav-link">Каталог</a></li>
            <li className="nav-item"><a href="/contacts.html" className="nav-link">Контакты</a></li>
          </ul>
        </section>
      </div>
      <div className="col">
        <section>
          <h5>Принимаем к оплате:</h5>
          <div className="footer-pay">
            <div className="footer-pay-systems footer-pay-systems-paypal"></div>
            <div className="footer-pay-systems footer-pay-systems-master-card"></div>
            <div className="footer-pay-systems footer-pay-systems-visa"></div>
            <div className="footer-pay-systems footer-pay-systems-yandex"></div>
            <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
            <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
          </div>
        </section>
        <section>
          <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
            Все права защищены.<br/>Доставка по всей России!
          </div>
        </section>
      </div>
      <div className="col text-right">
        <section className="footer-contacts">
          <h5>Контакты:</h5>
          <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
          <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
          <a className="footer-contacts-email" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
          <div className="footer-social-links">
            <div className="footer-social-link footer-social-link-twitter"></div>
            <div className="footer-social-link footer-social-link-vk"></div>
          </div>
        </section>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Cart
