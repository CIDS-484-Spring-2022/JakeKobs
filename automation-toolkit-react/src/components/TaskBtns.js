import tasks from "../jsonData/tasks.json";
import {
  faTrashCan,
  faPlay,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
export default function TaskBtns(props) {
  const removeTask = (id) => {
    var taskUrl = `http://localhost:3500/tasks/${id}`;
    let task = tasks["tasks"].filter((task) => task.taskId === id);
    axios.delete(taskUrl, task);
  };
  let { id } = props;
  return (
    <div>
      <button class="btn btn-sm btn-success me-2">
        <FontAwesomeIcon icon={faPlay} />
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
