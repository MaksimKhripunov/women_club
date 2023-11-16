import Image from "./Image";
import photo from "../images/photo.jpg"
import "../css/whoAmI.css"

const WhoAmI = function (){
    return(
        <>
            <div className={"whoAmI"}>
                <div className={"helloText"}>
                <p className={"helloTxt"}>Привет, меня зовут Катя!</p>
                <p>Талантливый визажист стилист, стаж
                    более 20-ти лет, победитель битвы визажистов в Москве. Обладатель золотого диплома обучения в школе красоты в Израиле</p>
                <p>В прошлом совладельца агентства по организации праздников, декоратор, организатор и ведущая торжеств</p>
                <p>Владельца духовно психологического женского клуба
                    «Женский клуб Бережной» для всех женщин кто идет по пути любви к себе к духовному развитию</p>
                <p>Организатор духовного фестиваля, помощник с самого начала и до воплощения идей в жизнь</p>

                </div>
                <div className={"myImage"}>
                <Image image={photo} className={"myPhoto"}/>
                </div>
            </div>

        </>
    )
}

export default WhoAmI;