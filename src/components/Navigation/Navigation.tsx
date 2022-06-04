import React, { memo } from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

interface IProps {
  theme: string;
}

const Navigation: React.FC<IProps> = memo(({ theme }) => (
  <nav className={`${theme === "bright" ? "" : styles.dark}`}>
    <ul className="inline">
      <li>
        <Link to={`${process.env.PUBLIC_URL}/`}>Main</Link>
      </li>
      <li>
        <Link to={`${process.env.PUBLIC_URL}/list`}>All</Link>
      </li>
    </ul>
  </nav>
));

export default Navigation;
