import {
  faTrashCan,
  faPlay,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function TaskBtns(props) {
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
      <button class="btn btn-sm btn-danger">
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
}
