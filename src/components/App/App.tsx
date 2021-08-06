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

  return (
    <>
      <Header />
      <RouterApp />
    </>
  );
}

export default App;
