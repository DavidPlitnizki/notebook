import React, { useState, memo } from "react";
import { TodoFormProps } from "../../interfaces/interfaces";
import styles from "./Form.module.css";

interface IProps extends TodoFormProps {
  theme: string;
}

const Form: React.FC<IProps> = memo(({ onAddTask, theme }) => {
  const [input, setInput] = useState<string>("");
  const [txtArea, setTxtArea] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input === "" || txtArea === "") return;
    const formObj = {
      id: Date.now(),
      title: input,
      desc: txtArea,
      status: "todo",
    };
    onAddTask(formObj);
    clearTextFields();
  };

  const clearTextFields = () => {
    setInput("");
    setTxtArea("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${theme === "bright" ? "" : styles.dark}`}
    >
      <div className="form-group">
        <label htmlFor="title" className={styles.title}>
          Create Task
        </label>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          style={{ width: "15rem" }}
          name="title"
          placeholder="title"
          id="title..."
        />
        <textarea
          onChange={(e) => setTxtArea(e.target.value)}
          value={txtArea}
          style={{ width: "15rem", height: "15rem" }}
          name="body"
          placeholder="Enter something..."
        ></textarea>
        <button type="submit" className="btn-success">
          Save
        </button>
      </div>
    </form>
  );
});

export default Form;
