import React from "react";
import TaskBtns from "./TaskBtns";

export default function TaskListItem(props) {
  let { id, username, proxy, site, status } = props.task;
  return (
    <tr>
      <td style={{ textAlign: "center" }}>{id}</td>
      <td style={{ textAlign: "center" }}>{username}</td>
      <td style={{ textAlign: "center" }}>{proxy.split(":")[0]}</td>
      <td style={{ textAlign: "center" }}>{site}</td>
      <td style={{ textAlign: "center" }}>{status}</td>
      <td style={{ textAlign: "center" }}>
        <TaskBtns id={id} />
      </td>
    </tr>
  );
}
