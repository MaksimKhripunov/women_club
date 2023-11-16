import Image from "./Image";
import hands from "../images/hands.jpg"
import society from "../images/society.jpg"
import statuette from "../images/statuette.jpg"
import drink from "../images/drink.jpg"
import "../css/aboutUs.css"

const AboutUs = function(){



    return(
        <>
            <div className={"aboutUs"}>
                <div className={"head"}>
                    <p className={"aboutUsHeader"}>О нас</p>
                    <p>Женский клуб — это про любовь, про нежность к себе и тёплую атмосферу. Мы идём по пути к любви к себе. Мы учимся обретать эту любовь к себе и давать её миру.</p>
                </div>
            </div>

                <div className={"row"}>

                    <div className={"column"}>
                        <Image image={hands} className={"image"}/>
                        <p className={"imagesHeader"}>Поддержка</p>
                        <p>Каждая женщина может ощутить поддержку на наших занятиях</p>
                    </div>

                    <div className={"column"}>
                        <Image image={society} className={"image"}/>
                        <p className={"imagesHeader"}>Новые люди</p>
                        <p>Мы обретаем подруг, которые не осуждают</p>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"column"}>
                    <Image image={statuette} className={"image"}/>
                    <p className={"imagesHeader"}>Медитации и практики</p>
                    <p>Мы делаем практики и медитации, чтобы узнать себя ещё больше</p>
                    </div>

                    <div className={"column"}>
                    <Image image={drink} className={"image"}/>
                    <p className={"imagesHeader"}>Особая атмосфера</p>
                    <p>На наших занятиях тёплая и дружелюбная атмосфера</p>
                    </div>
                </div>


        </>
    )
}

export default AboutUs;