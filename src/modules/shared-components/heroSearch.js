import React from "react";
import { ImPhone } from "react-icons/im";
import Buttons from "./buttons";

class HeroSearch extends React.Component {
    render() {
        return (
            <>
                <div className="hero__search">
                    <div className="hero__search__form">
                        <form action="#">
                            <div className="hero__search__categories">
                                All Categories
                                <span className="arrow_carrot-down"></span>
                            </div>
                            <input type="text" placeholder="What do yo u need?" />
                            <Buttons btnName="search"/>
                        </form>
                    </div>
                    <div className="hero__search__phone">
                        <div className="hero__search__phone__icon flex items-center justify-center">
                            <ImPhone className="text-green-500"/>
                        </div>
                        <div className="hero__search__phone__text">
                            <h5>+65 11.188.888</h5>
                            <span>support 24/7 time</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HeroSearch;