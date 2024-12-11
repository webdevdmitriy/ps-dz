import './Search.css'

const Search = () => {
  return (
    <div className="search">
      <input className="search__input" placeholder="Введите название"></input>
      <img className="search__icon" src="/search.svg" alt="Поиск" />
    </div>
  )
}

export default Search
