import React, {useEffect} from 'react';
import Header from '../Header/Header';
import RouterApp from '../../routerApp';
import {useStorage} from '../../hooks/useStorage';
import {useDispatch} from 'react-redux';
import {addStoredTasks} from '../../store/TaskSlice';

const App: React.FC = () => {

  const { getAll } = useStorage();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTasks = getAll();
    dispatch(addStoredTasks(storedTasks));
  },[]);

  const themeCB = (theme: string) => {
    console.log(theme)
    const body = document.querySelector('body');
    body?.removeAttribute("class")
    body?.classList.add(theme)
  }

  return (
    <>
      <Header getTheme={themeCB} />
      <RouterApp />
    </>
  );
}

export default App;
