import {BsTelegram} from "react-icons/bs";
import {SlSocialVkontakte} from "react-icons/sl";
import "../css/footer.css"


const Footer = function (){
    return(
        <>
            <div className={"footer"}>
                <div className={"join_us"}>
                    <p>Присоединяйтесь к нам в соцсетях</p>
                </div>
                <div className={"links"}>
                <a href={"https://vk.me/join/K5uOIVoe6gZORKiDyeT433KORkhLcItT/bE="}>
                    <SlSocialVkontakte className={"vk"}/>
                </a>
                <a href={"https://t.me/zhenskyiklubberezhnoy"}>
                    <BsTelegram className={"tg"}/>
                </a>
                </div>
            </div>
        </>
    )
}
export default Footer;