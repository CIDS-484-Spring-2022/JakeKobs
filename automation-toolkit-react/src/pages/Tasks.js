import React, { Component } from "react";
import taskList from "../jsonData/tasks.json";
import TaskMenu from "../components/TaskMenu";
import TaskListItem from "../components/TaskListItem";
import TableHead from "../components/TableHead";
const axios = require("axios").default;
export default class Home extends Component {
  state = {
    tasks: taskList,
  };
  async componentWillMount() {
    const taskUrl = "http://localhost:3500/tasks";
    await axios.get(taskUrl).then((res) => {
      const tasks = res.data;
      this.setState({ tasks });
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
