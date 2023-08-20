import React from "react";

import './ListHeader.css';

const ListHeader = (props) => {
    return (
        <div className="list-header">
            <h3 className="list-header__title">{props.title}</h3>
        </div>
    )
}

export default ListHeader;