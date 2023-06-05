import React from "react";
import BottomSection from "./sidebar";
import MiddleSection from "./middleSection";
import TopSection from "./headerSection";


class Contacts extends React.Component {
    render() {
        return (
            <>
                <h1>Contact US</h1>
                <TopSection /> <br></br>
                <MiddleSection /> <br></br>
                <BottomSection /> <br></br>
            </>
        )
    }
}

export default Contacts;