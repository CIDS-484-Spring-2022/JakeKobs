import tasks from "../jsonData/tasks.json";
import setExecution from "../driver.js";
import { useState, setState } from "react";
import {
  faTrashCan,
  faPlay,
  faPencil,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
export default function TaskBtns(props) {
  let [status, setStatus] = useState(faPlay);
  let iconBackground = "btn btn-sm me-2 ";
  const removeTask = (id) => {
    var taskUrl = `http://localhost:3500/tasks/${id}`;
    let task = tasks["tasks"].filter((task) => task.taskId === id);
    axios.delete(taskUrl, task);
  };

  const startTask = async (id) => {
    let currentStatus;
    currentStatus = status == faPlay ? faStop : faPlay;
    setStatus(currentStatus);
    if (status === faPlay) {
      await setExecution(id);
    } else {
      console.log("Kill Process");
    }
  };
  let { id } = props;
  return (
    <div>
      <button
        class={
          (iconBackground =
            status == faPlay
              ? iconBackground + "btn-success"
              : iconBackground + "btn-warning")
        }
        onClick={() => startTask(id)}
      >
        <FontAwesomeIcon icon={status} />
      </button>
      <button
        class="btn btn-sm btn-secondary me-2"
        onClick={() => console.log("Edit pressed for task " + id)}
      >
        <FontAwesomeIcon icon={faPencil} />
      </button>
      <button class="btn btn-sm btn-danger" onClick={() => removeTask(id)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
}
