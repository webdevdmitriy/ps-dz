import style from './Search.module.css'

const Search = () => {
  return (
    <div className={style.search}>
      <input className={style.search__input} placeholder="Введите название"></input>
      <img className={style.search__icon} src="/search.svg" alt="Поиск" />
    </div>
  )
}

export default Search
