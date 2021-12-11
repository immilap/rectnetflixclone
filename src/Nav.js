import "./Nav.css";
import React, { useEffect, useState } from 'react'

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="https://r9ehu3b03f8qg3nim601s198-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/14590237_web1_181129-RDA-Netflix-Canada-plans-biggest-price-increase-yet-as-competition-intensifies_1-640x427.jpg" alt="Netflix Logo" />
            <img className="nav_avatar" src="https://r9ehu3b03f8qg3nim601s198-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/14590237_web1_181129-RDA-Netflix-Canada-plans-biggest-price-increase-yet-as-competition-intensifies_1-640x427.jpg" alt="Netflix Logo" />
        </div>
    )
}

export default Nav
