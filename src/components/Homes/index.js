import axios from "axios";
import { useEffect, useState } from "react";

function Homes(){

    const [Home, setHome ] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7129/Home").then((response) => {
            setHome((existingData) => {
                return response.data;
            });
        });
    }, []);

    return (
        <div className="cards1 d-flex ">
        {
            Home.map((h) => (
            <div className="card">
            <   img width={140} height={130} src={ h.imgURL } alt="House" /> 
                <h5>{ h.name }</h5>
                <div className="d-flex justify-between">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{ h.price + " руб." }</b>
                    </div>
                    <button className="buttonLike ml-10">
                        <img height="20" width="20" src="/img/unliked.svg" alt="Unliked"/>
                    </button>
                    <button className="button">
                        <img width = {20} height = {20} src="/img/plus.png" alt="Plus"/>
                     </button>
                </div>
            </div>
        ))}
        </div>
    );
}

export default Homes;