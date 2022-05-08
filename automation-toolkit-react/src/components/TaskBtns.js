import tasks from "../jsonData/tasks.json";
import setExecution from "../driver.js";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import AccountList from "../jsonData/accounts.json";
import ProxyList from "../jsonData/proxies.json";
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
  let [status, setStatus] = useState(faPlay);
  let iconBackground = "btn btn-sm me-2 ";
  let { id } = props;
  let task = tasks["tasks"].filter((task) => task.id === id)[0];
  let siteName = task.site;
  let acc = task.username;
  let proxy = task.proxy;
  let password = task.password;
  const removeTask = (id) => {
    var taskUrl = `http://localhost:3500/tasks/${id}`;
    axios.delete(taskUrl, task);
  };
  const submitEdit = async () => {
    await axios.put(`http://localhost:3500/tasks/${props.id}`, {
      id: props.id,
      username: acc,
      password,
      proxy,
      site: siteName,
      proxyGroupName: task.proxyGroupName,
      accGroupName: task.accGroupName,
      status: "Idle",
    });
  };
  function onSiteChange(e) {
    siteName = e.target.value;
  }

  function onAccGroupChange(e) {
    acc = e.target.value;

    console.log(acc);
  }

  function onProxyGroupChange(e) {
    proxy = e.target.value;
    console.log(proxy);
  }
  const editTask = () => {
    setShow(true);
  };
  const startTask = async (id) => {
    let currentStatus;
    currentStatus = status === faPlay ? faStop : faPlay;
    setStatus(currentStatus);
    if (status === faPlay) {
      await setExecution(id);
    } else {
      console.log("Kill Process");
    }
  };

  return (
    <div>
      <button
        class={
          (iconBackground =
            status === faPlay
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
              <Form.Label>Accounts Group: {task.accGroupName}</Form.Label>
              <Form.Select onChange={onAccGroupChange}>
                {AccountList.accountgroups
                  .find((account) => account.groupname === task.accGroupName)
                  .accs.map((acc) => {
                    return <option value={acc.username}>{acc.username}</option>;
                  })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mt-2 mb-4 w-75 m-auto">
              <Form.Label>Proxy Group: {task.proxyGroupName}</Form.Label>
              <Form.Select onChange={onProxyGroupChange} on>
                {
                  //only show proxies within specified proxy group.
                  ProxyList.proxygroups
                    .find((val) => val.groupname === task.proxyGroupName)
                    .proxies.map((proxy) => {
                      return <option value={proxy.proxy}>{proxy.proxy}</option>;
                    })
                }
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={submitEdit}>
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
