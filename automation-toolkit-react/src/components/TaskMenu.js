import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import AccountList from "../jsonData/accounts.json";
import ProxyList from "../jsonData/proxies.json";
import TaskList from "../jsonData/tasks.json";
export default function TaskMenu() {
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const taskUrl = "http://localhost:3500/tasks";
  let idx = 0;
  let siteName = "Walmart";
  let newTaskList = [];
  let accGroupName =
    AccountList.accountgroups.length > 0
      ? AccountList.accountgroups[0].groupname
      : "";

  let proxyGroupName =
    ProxyList.proxygroups.length > 0 ? ProxyList.proxygroups[0].groupname : "";
  function onFormSubmit() {
    let parsedAccList = AccountList.accountgroups.filter(
      (acc) => acc["groupname"] === accGroupName
    );
    let parsedProxyList = ProxyList.proxygroups.filter(
      (proxy) => proxy["groupname"] === proxyGroupName
    );
    parsedAccList.map(function (account) {
      parsedProxyList.map(function (proxy) {
        while (
          account.accs[idx] !== undefined &&
          proxy.proxies[idx] !== undefined
        ) {
          newTaskList.push({
            id:
              TaskList["tasks"].length > 0
                ? TaskList["tasks"].at(-1)["id"] + (idx + 1)
                : 1,
            username: account.accs[idx].username,
            password: account.accs[idx].password,
            proxy: proxy.proxies[idx].proxy,
            site: siteName,
            status: "idle",
          });
          idx++;
        }
      });
    });

    idx = 0;
    newTaskList.map((task) => {
      TaskList.tasks.push(task);
    });

    // TaskList.tasks.map((task) => console.log(task));
    newTaskList = [];
  }
  function onSiteChange(e) {
    siteName = e.target.value;
  }

  function onAccGroupChange(e) {
    accGroupName = e.target.value;
  }

  function onProxyGroupChange(e) {
    proxyGroupName = e.target.value;
  }
  return (
    <nav className="pt-2 pb-2 navbar navbar-light bg-light border-bottom">
      <form className="container-fluid justify-content-start">
        <button
          className="btn btn-sm btn-success me-4"
          type="button"
          onClick={handleShow}
        >
          Create Tasks
        </button>
        <button className="btn btn-sm btn-danger me-4" type="button">
          Delete all Tasks
        </button>
        <button className="btn btn-sm btn-outline-success me-4" type="button">
          Start all Tasks
        </button>
      </form>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title style={{ margin: "auto" }}>Create Tasks</Modal.Title>
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
              <Form.Label>Proxy Group</Form.Label>
              <Form.Select onChange={onProxyGroupChange}>
                {ProxyList.proxygroups.map((group) => {
                  return (
                    <option value={group["groupname"]}>
                      {group["groupname"]}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={onFormSubmit}>
            Save
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
}
