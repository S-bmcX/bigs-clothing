import React from "react";
import "./cstmHomepage.styles.scss";

const Homepage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h2 className="title">Hats</h2>
                    <span className="sub-title">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h2 className="title">Jackets</h2>
                    <span className="sub-title">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h2 className="title">Sneakers</h2>
                    <span className="sub-title">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h2 className="title">Womens</h2>
                    <span className="sub-title">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h2 className="title">Mens</h2>
                    <span className="sub-title">Shop Now</span>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage;