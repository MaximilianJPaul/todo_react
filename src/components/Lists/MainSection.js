import React from "react";

import './MainSection.css'
import List from "./List";

const MainSection = () => {

    return (
        <div className="main-section">
            <List title="Training" />
            <List title="Heath" />
            <List title="Goals" />
        </div>
    )
}

export default MainSection;