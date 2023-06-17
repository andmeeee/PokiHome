
function Header(){
    return(
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
    )
}

export default Header;