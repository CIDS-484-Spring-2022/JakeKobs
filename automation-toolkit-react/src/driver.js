import axios from "axios";
import beginBestbuyRegistration from "./automation/bestbuy_registration/registration_process_bestbuy";
export default async function setExecution(id) {
  await axios.get(`http://localhost:3500/tasks/${id}`).then(async (task) => {
    console.log(task);
    if (task.data !== undefined) {
      switch (task.data["site"]) {
        case "Best Buy":
          await beginBestbuyRegistration(task.data);
          break;
      }
    }
  });
}
