import axios from "axios";
export default async function setExecution(id) {
  await axios.get(`http://localhost:3500/tasks/${id}`).then(async (task) => {
    console.log(task);
    if (task.data !== undefined) {
      switch (task.data["site"]) {
        case "Best Buy":
          await axios.post("http://localhost:4000/bestbuy", {
            taskData: task.data,
          });
          break;
      }
    }
  });
}
