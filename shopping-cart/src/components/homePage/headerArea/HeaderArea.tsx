import React from 'react';
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import NavigationBar from "./NavigationBar";

const HeadreArea:React.FC = () => {
    return(
        <div>
            <TopHeader/>
            <BottomHeader/>
            <NavigationBar/>
        </div>
    )
}

export default HeadreArea;