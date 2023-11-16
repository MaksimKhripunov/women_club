import Image from "./Image";
import table from "../images/table.jpg";
import candle from "../images/candle.jpg";
import selfie from "../images/selfie.jpg";
import coven from "../images/coven.jpg";
import crowd from "../images/crowd.jpg";
import nature from "../images/nature.jpg";
import solo from "../images/solo.jpg";
import review1 from "../images/review1.jpg";
import review2 from "../images/review2.jpg";
import video1 from "../videos/video1.MP4";
import video2 from "../videos/video2.MP4";
import video3 from "../videos/video3.MP4";
import "../css/aboutClub.css";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import {useState} from "react";
import ReactPlayer from "react-player";



const AboutClub = function (){
    const [counterPhoto, setCounterPhoto] = useState(0);
    const [lastActive, setLastActive] = useState("0");



    function tMove(){
        /*stopVideo();*/

        let div = document.querySelector(".onePic");
        div.addEventListener("scroll", ()=>{
            let element = document.getElementById(lastActive);
            element.classList.remove("circleActive");
            element.classList.add("circle");

            for(let i=0;i<7;i++){
                if(Math.abs(div.scrollLeft - div.clientWidth * i)<20){
                    let element=document.getElementById(i.toString());
                    element.classList.remove("circle");
                    element.classList.add("circleActive");
                    setLastActive(i.toString());
                    break;
                }
            }
        });

    }




    window.addEventListener('load', ()=>{
        let div = document.querySelector('.onePic');
        div.scrollTo({
            left:0
        });
        let element = document.getElementById("0");
        element.classList.add("circleActive");
        element.classList.remove("circle");
        setLastActive("0");
    });

    window.addEventListener('resize', ()=>{
        let div = document.querySelector('.onePic');
        let width = counterPhoto * div.offsetWidth;
        div.scrollTo({
            left:width
        });
    });


    function swipe(counter){
        if (counter>-1 && counter < 7) {
            let div = document.querySelector('.onePic');
            let width = counter * div.offsetWidth;
            div.scrollTo({
                left:width,
                behavior:"smooth"
            });
            let element = document.getElementById(lastActive);
            element.classList.remove("circleActive");
            element.classList.add("circle");
            element=document.getElementById(counter.toString());
            element.classList.remove("circle");
            element.classList.add("circleActive");
            setCounterPhoto(counter);
            setLastActive(counter.toString());
        }
    }

   /* function stopVideo(){
        console.log();
        let element = document.getElementById("player1");
        element.children[0].pause();
        element.children[0].currentTime=0;
        element = document.getElementById("player2");
        element.children[0].pause();
        element.children[0].currentTime=0;
        element = document.getElementById("player3");
        element.children[0].pause();
        element.children[0].currentTime=0;
    }*/


    return(
        <>
            <div className={"fullContainer"}>
                <div className={"aboutClub"}>
                    <div className={"aboutClubCont"}>
                        <p className={"aboutClubHeader"}>О клубе</p>
                        <p>На занятиях, каждая может почувствовать заботу и понимание. Мы читаем книги, обсуждаем их, делаем духовные практики, медитируем и просто общаемся. Мы обретаем подруг и поддержку. Иногда, к нам приходят эксперты, музыканты и люди, которым есть чем поделиться. На занятиях своя атмосфера: свечи, уют, вкусный чай и женские разговоры, самые искренние и честные.</p>
                    </div>
                </div>
                <div className={"aboutClasses"}>
                    <div className={"ourClassesCont"}>
                        <p className={"ourClassesHeader"}>Наши занятия</p>
                        <p>Женщина - это про любовь</p>
                    </div>
                </div>
                <div className={"picContainer"}>
                <div className={"picCont"}>
                    <div className={"twoPicCont"}>
                        <div className={"twoPic"}>
                            <Image image={table} className={"imageTwoPicFirst"} />
                            <Image image={candle} className={"imageTwoPicSecond"}/>
                        </div>
                    </div>

                    <div className={"onePicCont"}>
                        <div className={"onePic"} onTouchEnd={tMove}>
                            <div className={"imageCont"}><Image image={selfie} className={"imageOnePic"}/></div>
                            <div className={"imageCont"}><Image image={crowd} className={"imageOnePic"}/></div>
                            <div className={"imageCont"} id={"imageContId"}><Image image={coven} className={"imageOnePicLonger"}/></div>
                            <div className={"imageCont"}><Image image={solo} className={"imageOnePicLonger"}/></div>
                            <div className={"imageCont"}><Image image={nature} className={"imageOnePicLonger"}/></div>
                            <div className={"imageCont"}><Image image={review1} className={"imageOnePicLonger"}/></div>
                            <div className={"imageCont"}><Image image={review2} className={"imageOnePic"}/></div>
                            {/*<div className={"imageCont"}>
                                <ReactPlayer id='player1' height='40%' width='40%' url={video1}  playing={false} controls={true}/>
                            </div>
                            <div className={"imageCont"}>
                                <ReactPlayer id='player2' height='40%' width='40%' url={video2} playing={false} controls={true}/>
                            </div>
                            <div className={"imageCont"}>
                                <ReactPlayer id='player3' height='40%' width='40%' url={video3} playing={false} controls={true}/>
                            </div>*/}
                            {
                                !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
                                    .test(navigator.userAgent)) &&
                                <>
                                <div className={"buttonLeft"} /*onClick={stopVideo}*/>
                                    <SlArrowLeft onClick={() => {swipe(counterPhoto-1)}} className={"button"}/>
                                </div>
                                <div className={"buttonRight"} /*onClick={stopVideo}*/>
                                    <SlArrowRight onClick={() => {swipe(counterPhoto+1)}} className={"button"}/>
                                </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className={"points"}>
                        <div className={"circleActive"} id={"0"}></div>
                        <div className={"circle"} id={"1"}></div>
                        <div className={"circle"} id={"2"}></div>
                        <div className={"circle"} id={"3"}></div>
                        <div className={"circle"} id={"4"} /*onClick={()=>{pointsCheck("4")}}*/></div>
                        <div className={"circle"} id={"5"} /*onClick={()=>{pointsCheck("4")}}*/></div>
                        <div className={"circle"} id={"6"} /*onClick={()=>{pointsCheck("4")}}*/></div>
                    </div>
                </div>
                </div>
            </div>


        </>
    )
}

export default AboutClub;