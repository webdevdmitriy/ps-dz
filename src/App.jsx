import './App.css'
import Body from './components/Body/Body.jsx'
import Button from './components/Button/Button.jsx'
import Header from './components/Header/Header.jsx'
import Paragraph from './components/Paragraph/Paragraph.jsx'
import Search from './components/Search/Search.jsx'
import Title from './components/Title/Title.jsx'

function App() {
  return (
    <div className="app">
      <Header />

      <Body>
        <Title />
        <Paragraph />

        <div className="search-block">
          <Search />
          <Button
            className="button"
            handlerClick={() => {
              alert('Искать')
            }}
          >
            Искать
          </Button>
        </div>
      </Body>
    </div>
  )
}
export default App
