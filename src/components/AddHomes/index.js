import axios from "axios";
import { useRef } from "react";

function AddHomes(){

    const name = useRef("");
    const price = useRef("");
    const imgURL = useRef("");

    function AddHomeHandler(){

        var paylord ={
            name: name.current.value,
            price: price.current.value,
            imgURL: imgURL.current.value,
        }
        axios.post("https://localhost:7129/Home", paylord).then((response) => {
                return(response.data);
            });

      }

    return (
        <>
        <form className="form">
            <h7>Добавить новый дом</h7>
            <label>
                Название:
            </label>
            <input className="inp" type="text" ref={name} />
            <label>
                Цена:
            </label>
            <input className="inp" type="number" ref={price} />
            <label>
                Адрес фото в проекте:
            </label>
            <input className="inp" type="text" ref={imgURL} />
            <input className="submitt" type="submit" value="Отправить" onClick={AddHomeHandler}/>
        </form>
        <div className="some">
            <h6>123</h6>
        </div>
        </>
    );
}

export default AddHomes;