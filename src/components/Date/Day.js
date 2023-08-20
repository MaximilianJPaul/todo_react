import React, { useState } from "react";
import './Day.css'

const Day = (props) => {

    const chooseDayHandler = (event) => {
        props.hoverDateHandler(event);
    }

    return (
        <button className="curr_day" onClick={chooseDayHandler}>
            <div className="curr-day__day">
                <h4 className="day">{props.day.day[0]}</h4>
            </div>
            <div className="curr-day__date">
                <p className="date">{props.day.date}</p>
            </div>
        </button>
    )
}

export default Day;