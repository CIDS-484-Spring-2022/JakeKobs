import tasks from "../jsonData/tasks.json";
import TaskMenu from "../components/TaskMenu";
import TaskListItem from "../components/TaskListItem";
import TableHead from "../components/TableHead";
export default function Home() {
  if (tasks.length > 0) {
    return (
      <div>
        <TaskMenu />
        <table class="table table-striped">
          <TableHead />
          <tbody>
            {tasks.map((task) => {
              return <TaskListItem task={task} />;
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <TaskMenu />
        <table class="table table-striped">
          <TableHead />
        </table>
        <h1>There are no tasks :(</h1>
      </div>
    );
  }
}
