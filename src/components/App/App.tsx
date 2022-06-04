import { useStorage } from "hooks/useStorage";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RouterApp from "routerApp";
import { RootState } from "store";
import { addStoredTasks } from "store/TaskSlice";

import Header from "components/Header/Header";

import styles from "./App.module.css";

const App: React.FC = () => {
  const themeStyle = useSelector(
    (state: RootState) => state.theme.theme,
    shallowEqual
  );
  const { getAll } = useStorage();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTasks = getAll();
    dispatch(addStoredTasks(storedTasks));
  }, []);

  const styleTheme = themeStyle === "bright" ? "" : styles.dark;

  return (
    <div className={`${styleTheme} ${styles.wrapper}`}>
      <Header />
      <RouterApp />
    </div>
  );
};

export default App;
