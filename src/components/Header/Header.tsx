import React from 'react';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return(
        <nav className="border split-nav">
            <div className="nav-brand">
                <h3><a href="/">NOTEBOOK</a></h3>
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
                <div className="collapsible-body">
                    <ul className="inline">
                        <li><Link to="/">Main</Link></li>
                        <li><Link to="/list">All</Link></li>
                    </ul>
                </div>
            </div>
      </nav>
    )
}

export default Header;