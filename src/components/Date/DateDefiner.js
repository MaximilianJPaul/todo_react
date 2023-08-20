import React, { useState } from "react";
import './DateDefiner.css';

import WeekDefiner from "./WeekDefiner";
import MonthDefiner from "./MonthDefiner";

const DateDefiner = () => {
    const firstDayOfCurrentWeek = () => {
        let curr = new Date();
        let first = curr.getDate() - curr.getDay();
        let firstDay = new Date(curr.setDate(first));

        return firstDay;
    };

    const defineWeek = (currentDay, locale = 'en-US') => {
        let date = new Date(currentDay);
        let week = [];

        for (let i = 0; i < 7; i++) {
            let dayName = date.toLocaleDateString(locale, { weekday: 'long' });
            let dayDate = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();

            week.push({
                day: dayName,
                date: dayDate,
                month: month,
                year: year
            });

            date.setDate(date.getDate() + 1);
        }

        return week
    }

    const [firstDayOfWeek, setfirstDayOfWeek] = useState(firstDayOfCurrentWeek);
    const [wholeWeek, setWeek] = useState(defineWeek(firstDayOfWeek));

    const changeWeekBackHandler = () => {
        let firstDayLastWeek = new Date(firstDayOfWeek);
        firstDayLastWeek = new Date(firstDayLastWeek.setDate(firstDayLastWeek.getDate() - 7));
        let lastWeek = defineWeek(firstDayLastWeek);

        setfirstDayOfWeek(prevDay => firstDayLastWeek);
        setWeek(prevWeek => lastWeek);
    }

    const changeWeekForwardHandler = () => {
        let firstDayLastWeek = new Date(firstDayOfWeek);
        firstDayLastWeek = new Date(firstDayLastWeek.setDate(firstDayLastWeek.getDate() + 7));
        let lastWeek = defineWeek(firstDayLastWeek);
        setfirstDayOfWeek(prevDay => firstDayLastWeek);
        setWeek(prevWeek => lastWeek);
    }

    return (
        <div>
            <MonthDefiner currentWeek={wholeWeek} onChangeWeekBack={changeWeekBackHandler} onChangeWeekForward={changeWeekForwardHandler}/>
            <WeekDefiner week={wholeWeek}/>
        </div>
    )
}

export default DateDefiner;