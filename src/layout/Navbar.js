import React from 'react';

const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-dark ${props.color} navbar-expand-sm`}>
                <div className="container">
                    <a href="#" className="navbar-brand">{props.heading}</a>
                </div>
            </nav>
        </>
    )
};
export default Navbar;