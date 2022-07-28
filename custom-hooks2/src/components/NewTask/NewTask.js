// import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useFetch from "../hooks/use-fetch";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useFetch();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText }; // we don't have acces of tasText here, we can either put all function inside handler or ,expect it as an argument
    props.onAddTask(createdTask); // we can bind the function when we pass it as an second argument fo sendTaskRequest, we can preconfigure a function
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://react-http-664f9-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: { "Content-Type": "application/json" },
      },
      createTask.bind(null, taskText) // first argument, set this, here don't matter but second argument will be the first argument received by createTaskFunction
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
