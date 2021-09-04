import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
    <nav>
        <ul className="inline">
            <li><Link to={`${process.env.PUBLIC_URL}/`}>Main</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/list`}>All</Link></li>
        </ul>
    </nav>
    )
}

export default Navigation;