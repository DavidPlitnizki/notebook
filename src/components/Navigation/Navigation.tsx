import React from 'react';
import { Link } from "react-router-dom";
import styles from './Navigation.module.css';

interface IProps {
    theme: string
}

const Navigation: React.FC<IProps> = ({theme}) => {

    const themeStyle = (theme === 'bright') ? '' : styles.dark;
    return (
    <nav className={`${themeStyle}`}>
        <ul className="inline">
            <li><Link to={`${process.env.PUBLIC_URL}/`}>Main</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/list`}>All</Link></li>
        </ul>
    </nav>
    )
}

export default Navigation;