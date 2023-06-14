
function Card(){
    return (
        <div className="card">
            <img width={140} height={130} src="/img/House/1.jpg" alt="House" /> 
            <h5>Небольшой осенний домик</h5>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
                </div>
                <button className="button1">
                <img height="20" width="20" src="/img/unliked.svg" alt="Unliked"/>
            </button>
            <button className="button">
                <img width = {20} height = {20} src="/img/plus.png" alt="Plus"/>
            </button>
            </div>
        </div>
    )
    
}

export default Card;