import React from "react";
import "../css/window.css"
const Window = function (){

    return(
        <>
            <div className={"window"}>
                <p><a href={"#whoAmI"}>Кто я</a></p>
                <p><a href={"#aboutClub"}>О нас</a></p>
                <p><a href={"#tariff"}>Тарифы</a></p>
                <p><a href={"#contacts"}>Контакты</a></p>
            </div>
        </>
    )
}

export default Window;