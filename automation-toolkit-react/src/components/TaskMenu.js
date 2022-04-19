import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import AccountList from "../jsonData/accounts.json";
import ProxyList from "../jsonData/proxies.json";
export default function TaskMenu() {
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let siteName = "Walmart";
  let accGroupName = AccountList.length > 0 ? AccountList[0].groupname : "";
  function onFormSubmit() {
    console.log(siteName + " " + accGroupName);
  }
  function onSiteChange(e) {
    siteName = e.target.value;
    console.log(siteName);
  }

  function onAccGroupChange(e) {
    accGroupName = e.target.value;
    console.log(accGroupName);
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
                {AccountList.map((group) => {
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
              <Form.Select>
                {ProxyList.map((group) => {
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
