import { useStorage } from "hooks/useStorage";
import { ITask } from "interfaces/interfaces";
import React, { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

import { addTask } from "../../store/TaskSlice";
import Form from "../Form/Form";

const Main: React.FC = () => {
  const themeStyle = useSelector(
    (state: RootState) => state.theme.theme,
    shallowEqual
  );
  const dispatch = useDispatch();
  const { save } = useStorage();

  const addNewtask = useCallback(
    (task: ITask) => {
      save(task);
      dispatch(addTask(task));
    },
    [dispatch, save]
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 center">
          <Form onAddTask={addNewtask} theme={themeStyle} />
        </div>
      </div>
    </div>
  );
};

export default Main;
