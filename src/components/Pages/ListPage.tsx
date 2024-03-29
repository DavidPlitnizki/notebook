import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { ITask } from "interfaces/interfaces";
import { RootState } from "store";
import Board from "components/Board/Board";
import "./styles.css";

const Listpage: React.FC = () => {
  const tasksList = useSelector(
    (state: RootState) => state.tasks.tasks,
    shallowEqual
  );
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskLength, setTaskLength] = useState<number>(0);

  useEffect(() => {
    if (tasksList.length !== taskLength) {
      setTaskLength(tasksList.length);
      setTasks(tasksList);
    }
  }, [tasksList, taskLength]);

  return <Board list={tasks} />;
};

export default Listpage;
