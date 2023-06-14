import Card from './components/Card'
import Head from './components/Header'
import Draw from './components/Drawer'

function App() {
  return (
    <div className="wrapper clear">
      <div style ={{display: 'none'}}className="overlay">
        <Draw />
      </div>
      <Head />
      <div className="content">
      <div className="d-flex align-center justify-between">
        <h1 className="123">Каталог домов</h1>
        <div className="search-block">
          <img width="12" height="12" src="/img/search.png" alt="Search"/>
          <input placeholder="Поиск..."/>
          </div>
        </div>
        </div>

      <div className="cards1 d-flex ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
    </div>

  );
}

export default App;
