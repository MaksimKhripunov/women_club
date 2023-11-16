import Image from "./Image"
import back from "../images/back.jpg"
import "../css/content.css"

const Content = function (){
    return(
        <>
            <Image image={back} className={"back"}/>
        </>
    )
}
export default Content;