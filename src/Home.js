import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className={"home"}>
            <div className={"home__container"}>
                <img className={"home__image"} src={"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"}
                     alt={""}
                />
                <div className={"home__row"}>
                    <Product id = {3209483} title={"the lean startup"} price={29.99} image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"}
                            rating={5}/>
                    <Product  id = {2309843} title={"the lean startup"} price={29.99} image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"}
                              rating={5}/>
                    {/*Product*/}
                </div>
                <div className={"home__row"}>
                    <Product id = {3099329} title={"the lean startup"} price={29.99} image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"}
                              rating={5}/>
                    <Product  id = {23908432} title={"the lean startup"} price={29.99} image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"}
                              rating={5}/>
                    <Product  id = {324839} title={"the lean startup"} price={29.99} image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"}
                              rating={5}/>
                </div>
                <div className={"home__row"}>
                    <Product  id = {4309834} title={"the lean startup"} price={29.99} image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"}
                              rating={5}/>                </div>
            </div>
        </div>
    )
}

export default  Home
