import React, { useState } from "react";

import './Footer.css';
import Container from "./Container";


const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const addListHandler = (event) => {
        event.preventDefault();
        console.log('Hello')
        setIsOpen(!isOpen);
    }

    const addNewListHandler = (event) => {
        let listName = event.target[0].value;
        let backColor = event.target[1].value;
    }
    

    return (
        <footer className="page-footer">
            <div className={`add-list ${isOpen && 'active'}`}>
                <div className="add-list__title">
                    <form onSubmit={addNewListHandler}>
                        <input type="text" name="list-name" className="list-name" placeholder="List Name"/>
                        <input type="text" name="list-color" className="list-color" placeholder="Background Color"/>
                        <button type="submit"></button>
                    </form>
                </div>
            </div>
            <Container className="footer-container">
                <div className="footer-menu">
                    <div className="footer-menu__button">
                        <button className="footer-menu__add" onClick={addListHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgb(100, 100, 100)" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;