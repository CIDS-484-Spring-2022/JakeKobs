import tasks from "../jsonData/tasks.json";
import TaskMenu from "../components/TaskMenu";
export default function Home() {
  if (tasks.length > 0) {
    return (
      <div>
        <TaskMenu />
        <ul>
          {tasks.map((task) => {
            return <li key={task.id}>{task.name + "=>" + task.id}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <TaskMenu />
        <h1>There are no tasks :(</h1>
      </div>
    );
  }
}
