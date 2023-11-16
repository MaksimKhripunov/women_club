import "../css/tariff.css"

const Tariff = function (){
    return(
        <>
            <div className={"tariff"}>
                <div className={"head"}>
                    <p className={"tariffHeader"}>Выберите тариф</p>
                    <p>Мы предоставляем гибкую систему оплаты занятий. Длительность одного занятия составляет 2 часа</p>
                </div>
            </div>

            <div className={"tariffContainer"}>

                <div className={"instanceTariff"}>
                    <p className={"instanceHeader"}>Одно занятие</p>
                    <p className={"description"}>Для всех видов практик</p>
                    <p className={"price"}>700 руб.</p>
                    <a href={"https://t.me/zhenskyiklubberezhnoy"}><button className={"buy"} >Купить</button></a>
                </div>

                <div className={"instanceTariff"}>
                    <p className={"instanceHeader"}>Абонемент на 8 занятий</p>
                    <p className={"description"}>Действителен для всех видов практик</p>
                    <p className={"price"}>5400 руб.</p>
                    <a href={"https://t.me/zhenskyiklubberezhnoy"}><button className={"buy"}>Купить</button></a>
                </div>

                <div className={"instanceTariff"}>
                    <p className={"instanceHeader"}>Безлимитный месяц</p>
                    <p className={"description"}>Неограниченное количество занятий</p>
                    <p className={"price"}>10000 руб.</p>
                    <a href={"https://t.me/zhenskyiklubberezhnoy"}><button className={"buy"} >Купить</button></a>
                </div>

            </div>


        </>
    )
}

export default Tariff;