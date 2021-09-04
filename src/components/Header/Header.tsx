import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import Badge from '../Badge/Badge';
import { RootState } from '../../store';
import Navigation from '../Navigation/Navigation';

const Header: React.FC = () => {
    const tasksList = useSelector((state: RootState) => state.tasks.tasks);

    return(
        <nav className="border split-nav">
            <div className="nav-brand">
                <h3><Link to={`${process.env.PUBLIC_URL}/`}>NOTEBOOK</Link></h3>
            </div>
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