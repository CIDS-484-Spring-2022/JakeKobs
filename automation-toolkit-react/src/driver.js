import axios from "axios";
export default async function setExecution(id) {
  await axios.get(`http://localhost:3500/tasks/${id}`).then(async (task) => {
    console.log(task);
    if (task.data !== undefined) {
      await axios.post(`http://localhost:4000/${task.data["site"]}`, {
        taskData: task.data,
      });
    }
  });
}
