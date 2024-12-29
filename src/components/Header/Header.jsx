import Button from '../Button/Button.jsx'
import MenuItem from '../MenuItem/MenuItem.jsx'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__inner}>
          <img className={style.bookmark} src="/bookmark.svg" alt="Закладка" />
          <nav className={style.menu}>
            <ul className={style.menu__list}>
              <MenuItem> Поиск фильмов</MenuItem>
              <MenuItem> Мои фильмы</MenuItem>
              <MenuItem>
                <Button
                  className={style.login}
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
