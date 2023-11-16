import React, {useState} from "react";
import "../css/header.css"
import {useResize} from "../hooks/useResize";


import {PiList} from "react-icons/pi";
import {RxCross1} from "react-icons/rx";
import Window from "./Window";


const Header = function (){
    const {width} = useResize();
    const [flag, setFlag] = useState(true);
    return(
        <>
            <header>
                <div className={"top"}>
                    {
                        width<1000 &&
                        (flag ? <PiList className={"list"} onClick={()=>{setFlag(false)}}/> : <RxCross1 className={"cross"} onClick={()=>{setFlag(true)}}/>)
                    }
                    {
                        width>=1000 &&
                        <p>
                            <a href={"#whoAmI"}>Кто я</a>
                            <a href={"#aboutClub"}>О нас</a>
                            <a href={"#tariff"}>Тарифы</a>
                            <a href={"#contacts"}>Контакты</a>
                        </p>
                    }
                </div>
                {flag === false && width<1000 &&
                    <Window/>
                }

            </header>
        </>
    )

}

export default Header;