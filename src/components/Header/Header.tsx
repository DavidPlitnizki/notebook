import React, { useCallback } from 'react';
import styles from './Header.module.css';

import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import Badge from '../Badge/Badge';
import { RootState } from '../../store';
import Navigation from '../Navigation/Navigation';
import ToggleTheme from '../Toggle/ToggleTheme';

interface IProps {
    getTheme: (theme: string) => void
}

const Header: React.FC<IProps> = ({getTheme}) => {
    const tasksList = useSelector((state: RootState) => state.tasks.tasks);

    const themeCB = useCallback((theme: string) => {
        getTheme(theme)
    },[getTheme])

    return(
        <nav className={`border split-nav ${styles.wrapper}`}>
            <div className="nav-brand">
                <h3><Link to={`${process.env.PUBLIC_URL}/`}>NOTEBOOK</Link></h3>
            </div>
            <ToggleTheme getTheme={themeCB} />
            <div className="collapsible">
            <input id="collapsible1" type="checkbox" name="collapsible1" />
                <button>
                    <label htmlFor="collapsible1">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </label>
                </button>
                {tasksList.length > 0 && <Badge type="menu" count={tasksList.length} />}
                <div className="collapsible-body">
                    <Navigation />
                    {tasksList.length > 0 && <Badge type="link" count={tasksList.length} />}
                </div>
            </div>
      </nav>
    )
}

export default Header;