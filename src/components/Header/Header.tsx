import React, { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "store";
import { changeTheme } from "store/ThemeSlice";

import Badge from "components/Badge/Badge";
import Navigation from "components/Navigation/Navigation";
import ToggleTheme from "components/Toggle/ToggleTheme";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  const tasksList = useSelector(
    (state: RootState) => state.tasks.tasks,
    shallowEqual
  );
  const themeStyle = useSelector(
    (state: RootState) => state.theme.theme,
    shallowEqual
  );
  const dispatch = useDispatch();

  const changeThemeCB = useCallback(
    (theme: string) => {
      dispatch(changeTheme({ theme }));
    },
    [dispatch]
  );

  const themeClass = themeStyle === "bright" ? styles.bright : styles.dark;

  return (
    <nav className={`border split-nav ${themeClass} ${styles.wrapper}`}>
      <div className="nav-brand">
        <h3>
          <Link to={`${process.env.PUBLIC_URL}/`}>NOTEBOOK</Link>
        </h3>
      </div>
      <ToggleTheme changeTheme={changeThemeCB} theme={themeStyle} />
      <div className="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1" />
        <button aria-label="Menu Icon">
          <label htmlFor="collapsible1">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </label>
        </button>
        {tasksList.length > 0 && <Badge type="menu" count={tasksList.length} />}
        <div className="collapsible-body">
          <Navigation theme={themeStyle} />
          {tasksList.length > 0 && (
            <Badge type="link" count={tasksList.length} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
