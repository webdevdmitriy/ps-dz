import Button from '../Button/Button.jsx'
import MenuItem from '../MenuItem/MenuItem.jsx'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <img className="bookmark" src="/bookmark.svg" alt="Закладка" />
          <nav className="menu">
            <ul className="menu__list">
              <MenuItem> Поиск фильмов</MenuItem>
              <MenuItem> Мои фильмы</MenuItem>
              <MenuItem>
                <Button
                  className="login"
                  handlerClick={() => {
                    alert('Войти')
                  }}
                >
                  Войти
                  <img className="login__img" src="/login.svg"></img>
                </Button>
              </MenuItem>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
