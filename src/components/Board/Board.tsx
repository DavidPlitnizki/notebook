import { useStorage } from "hooks/useStorage";
import { ITask } from "interfaces/interfaces";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateStatusTask } from "store/TaskSlice";

import NoteList from "components/List/NoteList";

import styles from "./Board.module.css";

interface IProps {
  list: ITask[];
}

const Board: React.FC<IProps> = memo((props: IProps) => {
  const [todoTasks, setTodoTasks] = useState<ITask[]>([]);
  const [progressTasks, setProgressTasks] = useState<ITask[]>([]);
  const [doneTasks, setDoneTasks] = useState<ITask[]>([]);

  const dragItem = useRef() as React.MutableRefObject<ITask>;

  const dispatch = useDispatch();
  const { updateTask } = useStorage();

  useEffect(() => {
    setTodoTasks(props.list.filter((task) => task.status === "todo"));
    setProgressTasks(
      props.list.filter((task) => task.status === "in_progress")
    );
    setDoneTasks(props.list.filter((task) => task.status === "done"));
  }, [props.list]);

  const onDragOverHandler = useCallback((e: any) => {
    e.preventDefault();
  }, []);

  const onDragStartHandler = useCallback(
    (e: any, task: ITask) => {
      dragItem.current = task;
    },
    [dragItem]
  );

  const filtredDataByTask = useCallback(
    (task: ITask) => {
      switch (task.status) {
        case "todo":
          const filtredTodoTasks = todoTasks.filter(
            (fromTask) => fromTask.id !== task.id
          );
          setTodoTasks(filtredTodoTasks);
          break;
        case "in_progress":
          const filtredProgressTasks = progressTasks.filter(
            (fromTask) => fromTask.id !== task.id
          );
          setProgressTasks(filtredProgressTasks);
          break;
        case "done":
          const filtredDoneTasks = doneTasks.filter(
            (fromTask) => fromTask.id !== task.id
          );
          setDoneTasks(filtredDoneTasks);
          break;
        default:
          break;
      }
    },
    [doneTasks, progressTasks, todoTasks]
  );

  const onDropHandler = useCallback(
    (e: any, dropTarget: string) => {
      if (dropTarget === dragItem.current.status) return;

      if (dropTarget === "todo") {
        const task = dragItem.current;
        filtredDataByTask(task);

        const newTask = {
          id: task.id,
          desc: task.desc,
          title: task.title,
          status: dropTarget,
        };
        setTodoTasks([...todoTasks, newTask]);
        dispatch(updateStatusTask(newTask));
        updateTask(newTask);
      } else if (dropTarget === "in_progress") {
        const task = dragItem.current;
        filtredDataByTask(task);

        const newTask = {
          id: task.id,
          desc: task.desc,
          title: task.title,
          status: dropTarget,
        };
        setProgressTasks([...progressTasks, newTask]);
        dispatch(updateStatusTask(newTask));
        updateTask(newTask);
      } else if (dropTarget === "done") {
        const task = dragItem.current;
        filtredDataByTask(task);

        const newTask = {
          id: task.id,
          desc: task.desc,
          title: task.title,
          status: dropTarget,
        };
        setDoneTasks([...doneTasks, newTask]);
        dispatch(updateStatusTask(newTask));
        updateTask(newTask);
      }
    },
    [
      dispatch,
      doneTasks,
      dragItem,
      filtredDataByTask,
      progressTasks,
      todoTasks,
      updateTask,
    ]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.col}>
        <span>TODO</span>
        <div
          className={styles.target}
          onDragOver={(e) => onDragOverHandler(e)}
          onDrop={(e) => onDropHandler(e, "todo")}
        >
          <NoteList data={todoTasks} onDrag={onDragStartHandler} />
        </div>
      </div>

      <div className={styles.col}>
        <span>IN PROGRESS</span>
        <div
          className={styles.target}
          onDragOver={(e) => onDragOverHandler(e)}
          onDrop={(e) => onDropHandler(e, "in_progress")}
        >
          <NoteList data={progressTasks} onDrag={onDragStartHandler} />
        </div>
      </div>

      <div className={styles.col}>
        <span>DONE</span>
        <div
          className={styles.target}
          onDragOver={(e) => onDragOverHandler(e)}
          onDrop={(e) => onDropHandler(e, "done")}
        >
          <NoteList data={doneTasks} onDrag={onDragStartHandler} />
        </div>
      </div>
    </div>
  );
});

export default Board;
