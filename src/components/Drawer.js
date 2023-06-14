
function Drawer(){
    return(
        <div className="drawer d-flex">
          <h2 className ="d-flex justify-between">
            Корзина <img className="removeBtn cu-p" width ={20} height={20} src="/img/cart.svg" alt="Delete"/>
          </h2>

          <div className="Items">
          <div className="cartItem d-flex align-center mb-30">
            <img className ="mr-20" width = {100} height={100} src="/img/House/1.jpg" alt="House"/>
            <div className ="mr-10">
              <p className="mb-5">Небольшой осенний домик</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" width ={18} height={18} src="/img/cart.svg" alt="Delete"/>
          </div>
          <div className="cartItem d-flex align-center mb-30">
            <img className ="mr-20" width = {100} height={100} src="/img/House/3.jpg" alt="House"/>
            <div className ="mr-10">
              <p className="mb-5">Зимний домик для влюблённых</p>
              <b>15 999 руб.</b>
            </div>
            <img className="removeBtn" width ={18} height={18} src="/img/cart.svg" alt="Delete"/>
          </div>
          
          </div>

          <div className="totalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>28 998 руб.</b>
            </li>
            <li>
              <span>Скидка 10%:</span>
              <div></div>
              <b>-2 899 руб.</b>
            </li>
          </ul>
          <button>Оформить заказ</button>
          </div>
        </div>
    )
}

export default Drawer;