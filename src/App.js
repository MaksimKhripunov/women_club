import React from "react";
import Header from "./components/Header";
import "./css/app.css"
import {SlArrowDown} from "react-icons/sl";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import WhoAmI from "./components/WhoAmI";
import {useResize} from "./hooks/useResize";
import AboutClub from "./components/AboutClub";
import Tariff from "./components/Tariff";


function App() {
    const {width, height} = useResize();
  return (
    <>
        <div className={"background"}>
        </div>
       <div className={"text"}>
           <p>Женский клуб Бережной</p>
           <p>Пространство любви и нежности к себе</p>
       </div>
        <div className={"root"}>
            <Header/>
        </div>

        {
            height>=300 &&
            <a href={"#aboutUs"}>
                <SlArrowDown className={"arrow"}/>
            </a>
        }


        <a id={"aboutUs"}>
            <AboutUs/>
        </a>
        <a id={"whoAmI"}>
            <WhoAmI/>
        </a>
        <a id={"aboutClub"}>
            <AboutClub/>
        </a>

        <a id={"tariff"}>
            <Tariff/>
        </a>

        <a id={"contacts"}>
            <Footer />
        </a>

    </>
  );
}

export default App;
