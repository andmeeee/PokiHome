

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width={40} height={40} src="img/logo.png" alt=""/>
        <div className="headerInfo">
          <h3 className="text-uppercase">Pokimon Home</h3>
          <p className="opacity-7">Магазин лучших домов</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width={20} height={20} src="img/cart.png" alt=""/>
            <span>1000 руб.</span>
          </li>
          <li>
          <img width={20} height={20} src="img/user.png" alt=""/>
          </li>
        </ul>
      </header>
      <div className="content ">
        <h1 className="mb-10">Каталог домов</h1>
      
        </div>

      <div className="cards1 d-flex">
        
      <div className="card">
        <img width={140} height={130} src="/img/House/1.jpg" alt="House" /> 
        <h5>Небольшой осенний домик</h5>
        <div className="d-flex justify-between">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img width = {20} height = {20} src="/img/plus.png" alt="Plus"/>
          </button>
        </div>

      </div>
      <div className="card">
        <img width={140} height={130} src="/img/House/2.jpg" alt="House" /> 
        <h5>Грибной домик в лесной чаще</h5>
        <div className="d-flex justify-between">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>9 999 руб.</b>
          </div>
          <button className="button">
            <img width = {20} height = {20} src="/img/plus.png" alt="Plus"/>
          </button>
        </div>

      </div>
      <div className="card">
        <img width={140} height={130} src="/img/House/3.jpg" alt="House" /> 
        <h5>Зимний домик для влюблённых</h5>
        <div className="d-flex justify-between">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>15 999 руб.</b>
          </div>
          <button className="button">
            <img width = {20} height = {20} src="/img/plus.png" alt="Plus"/>
          </button>
        </div>

      </div>
      <div className="card">
        <img width={140} height={130} src="/img/House/5.jpg" alt="House" /> 
        <h5>Большой замок на краю обрыва</h5>
        <div className="d-flex justify-between">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>39 999руб.</b>
          </div>
          <button className="button">
            <img width = {20} height = {20} src="/img/plus.png" alt="Plus"/>
          </button>
        </div>

      </div>
      </div>
      
      <div className="cards2 d-flex">
      <div className="card">
        <img width={140} height={130} src="/img/House/4.jpg" alt="House" /> 
        <h5>Каменный дом охотника</h5>
        <div className="d-flex justify-between">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>17 999 руб.</b>
          </div>
          <button className="button">
            <img width = {20} height = {20} src="/img/plus.png" alt="Plus"/>
          </button>
        </div>

      </div>
      <div className="card">
        <img width={140} height={130} src="/img/House/6.jpg" alt="House" /> 
        <h5>Дом с водной мельницей</h5>
        <div className="d-flex justify-between">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>11 999 руб.</b>
          </div>
          <button className="button">
            <img width = {20} height = {20} src="/img/plus.png" alt="Plus"/>
          </button>
        </div>

      </div>
      <div className="card">
        <img width={140} height={130} src="/img/House/7.jpg" alt="House" /> 
        <h5>Амбар посреди полей пшеницы</h5>
        <div className="d-flex justify-between">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>13 999 руб.</b>
          </div>
          <button className="button">
            <img width = {20} height = {20} src="/img/plus.png" alt="Plus"/>
          </button>
        </div>

      </div>
      <div className="card">
        <img width={140} height={130} src="/img/House/8.jpg" alt="House" /> 
        <h5>Маленький домик у берега реки</h5>
        <div className="d-flex justify-between">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>8 999 руб.</b>
          </div>
          <button className="button">
            <img width = {20} height = {20} src="/img/plus.png" alt="Plus"/>
          </button>
        </div>

      </div>
      </div>
    </div>

  );
}

export default App;
