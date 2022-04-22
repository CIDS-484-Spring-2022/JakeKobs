import taskList from "../jsonData/tasks.json";
import TaskMenu from "../components/TaskMenu";
import TaskListItem from "../components/TaskListItem";
import TableHead from "../components/TableHead";
const axios = require("axios").default;
const { Component } = require("react");
export default class Home extends Component {
  state = {
    tasks: taskList,
  };
  async componentDidMount() {
    await axios.get("http://localhost:3500/tasks").then((res) => {
      const tasks = res.data;
      this.setState({ tasks });
      console.log(this.state.tasks);
    });
  }
  render() {
    let { tasks } = this.state;
    if (tasks.length > 0) {
      return (
        <div>
          <TaskMenu />
          <table className="table table-striped">
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
          <table className="table table-striped">
            <TableHead />
          </table>
          <h1>There are no tasks :(</h1>
        </div>
      );
    }
  }
}
