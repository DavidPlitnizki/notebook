import React, {useEffect} from 'react';
import Header from '../Header/Header';
import RouterApp from '../../routerApp';
import {useStorage} from '../../hooks/useStorage';
import {useDispatch} from 'react-redux';
import {addStoredTasks} from '../../store/TaskSlice';
import { RootState } from '../../store';
import {useSelector} from 'react-redux';
import styles from './App.module.css';

const App: React.FC = () => {
  const themeStyle = useSelector((state: RootState) => state.theme.theme);
  const { getAll } = useStorage();
  const dispatch = useDispatch();


  useEffect(() => {
    const storedTasks = getAll();
    dispatch(addStoredTasks(storedTasks));
  },[]);

  const styleTheme = (themeStyle === 'bright') ? "" : styles.dark;

  return (
    <div className={`${styleTheme} ${styles.wrapper}`}>
      <Header />
      <RouterApp />
    </div>
  );
}

export default App;
