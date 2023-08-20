import React, { useState } from "react";
import Day from "./Day";
import './WeekDefiner.css';

const WeekDefiner = (props) => {
    const [activeDayExists, setActiveDay] = useState(false);

    const hoverDateHandler = (event) => {
        if (activeDayExists) {
            console.log('true')
            let dates = document.getElementsByClassName('curr_day');
            for (let i = 0; i < dates.length; i++) {
                dates[i].classList.remove('active-day');
            }
            event.target.className += ' active-day';
        } else {
            console.log('false')
            event.target.className += ' active-day';
            setActiveDay(true);
        }
    }

    return (
        <div className="week">
            {props.week.map((day, index) => {
                return <Day key={index} day={day} hoverDateHandler={hoverDateHandler}/>
            })}
        </div>
    );
}

export default WeekDefiner;