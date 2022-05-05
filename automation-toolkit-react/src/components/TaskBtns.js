import tasks from "../jsonData/tasks.json";
import setExecution from "../driver.js";
import { useState, setState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import AccountList from "../jsonData/accounts.json";
import ProxyList from "../jsonData/proxies.json";
import TaskList from "../jsonData/tasks.json";
import {
  faTrashCan,
  faPlay,
  faPencil,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
export default function TaskBtns(props) {
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [status, setStatus] = useState(faPlay);
  let [taskData, setTaskData] = useState({});
  let iconBackground = "btn btn-sm me-2 ";
  let siteName = "Walmart";
  let newTaskList = [];
  let accGroupName =
    AccountList.accountgroups.length > 0
      ? AccountList.accountgroups[0].groupname
      : "";
  let proxyGroupName =
    ProxyList.proxygroups.length > 0 ? ProxyList.proxygroups[0].groupname : "";
  const removeTask = (id) => {
    var taskUrl = `http://localhost:3500/tasks/${id}`;
    let task = tasks["tasks"].filter((task) => task.id === id);
    axios.delete(taskUrl, task);
  };
  function onSiteChange(e) {
    siteName = e.target.value;
  }

  function onAccGroupChange(e) {
    accGroupName = e.target.value;
  }

  function onProxyGroupChange(e) {
    proxyGroupName = e.target.value;
  }
  const editTask = async (id) => {
    setShow(true);
  };
  const startTask = async (id) => {
    let currentStatus;
    currentStatus = status == faPlay ? faStop : faPlay;
    setStatus(currentStatus);
    if (status === faPlay) {
      await setExecution(id);
    } else {
      console.log("Kill Process");
    }
  };
  let { id } = props;
  let task = tasks["tasks"].filter((task) => task.id === id);

  return (
    <div>
      <button
        class={
          (iconBackground =
            status == faPlay
              ? iconBackground + "btn-success"
              : iconBackground + "btn-warning")
        }
        onClick={() => startTask(id)}
      >
        <FontAwesomeIcon icon={status} />
      </button>
      <button
        class="btn btn-sm btn-secondary me-2"
        onClick={() => editTask(id)}
      >
        <FontAwesomeIcon icon={faPencil} />
      </button>
      <button class="btn btn-sm btn-danger" onClick={() => removeTask(id)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title style={{ margin: "auto" }}>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mt-2 mb-4 w-75 m-auto">
              <Form.Label>Site</Form.Label>
              <Form.Select onChange={onSiteChange}>
                {["Walmart", "Target", "Best Buy"].map((site) => {
                  return <option value={site}>{site}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mt-2 mb-4 w-75 m-auto">
              <Form.Label>Account Group</Form.Label>
              <Form.Select onChange={onAccGroupChange}>
                {AccountList.accountgroups.map((group) => {
                  return (
                    <option value={group["groupname"]}>
                      {group["groupname"]}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mt-2 mb-4 w-75 m-auto">
              <Form.Label>Proxy</Form.Label>
              <Form.Select onChange={onProxyGroupChange}>
                {
                  //only show proxies within specified proxy group.
                  ProxyList.proxygroups
                    .find((val) => val.groupname == task[0].proxyGroupName)
                    .proxies.map((proxy) => {
                      return <option value={proxy.proxy}>{proxy.proxy}</option>;
                    })
                }
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
