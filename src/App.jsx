import style from './App.module.css'
import Body from './components/Body/Body.jsx'
import Button from './components/Button/Button.jsx'
import Card from './components/Card/Card.jsx'
import Header from './components/Header/Header.jsx'
import Paragraph from './components/Paragraph/Paragraph.jsx'
import Search from './components/Search/Search.jsx'
import Title from './components/Title/Title.jsx'
import films from './json/films.json'

function App() {
  return (
    <div className="app">
      <Header />
      <Body>
        <Title />
        <Paragraph />
        <div className={style['search-block']}>
          <Search />
          <Button
            className={style.button}
            handlerClick={() => {
              alert('Искать')
            }}
          >
            Искать
          </Button>
        </div>

        <div className={style.cards}>
          {films.map(film => (
            <Card key={film.id} {...film} />
          ))}
        </div>
      </Body>
    </div>
  )
}
export default App
