import React, { useState, useEffect } from "react";
import './MonthDefiner.css'

const MonthDefiner = (props) => {
    const monthsName = {
        0: "January",
        1: "February", 
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }

    const defineYear = (weekInfo) => {
        let years = new Set();

        weekInfo.map(day => {
            years.add(day.year);
        })

        years = Array.from(years).sort();

        return years
    }

    const defineMonth = (weekInfo) => {
        let months = new Set();

        weekInfo.map(day => {
            months.add(day.month)
        })

        months = Array.from(months).sort();
        return months
    }

    const formatMonth = (months) => {
        return months.length > 1 ? `${monthsName[months[0]].slice(0, 3)} - ${monthsName[months[1]]}` : `${monthsName[months[0]]}`;
    }

    const [months, setMonths] = useState(defineMonth(props.currentWeek))
    const [years, setYears] = useState(defineYear(props.currentWeek))

    useEffect(() => {}, [months, years])
    
    const updateWeek = () => {
        setMonths(prevMonths => defineMonth(props.currentWeek));
        setYears(prevYears => defineYear(props.currentWeek));
    }

    const lastWeekHandler = () => {
        props.onChangeWeekBack();
        updateWeek();
    }

    const nextWeekHandler = () => {
        props.onChangeWeekForward();
        updateWeek();
    }

    return (
        <div className="date-header">
            <div className="date-header__button">
                <button className="date-header__direction left" onClick={lastWeekHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(147, 147, 147)" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </button>
            </div>
            <div className="date-header__main">
                <h2 className="date-header__year">{years.join(' - ')}</h2>
                <p className="date-header__month">{formatMonth(months)}</p>
            </div>
            <div className="date-header__button">
                <button className="date-header__direction right" onClick={nextWeekHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(147, 147, 147)" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default MonthDefiner