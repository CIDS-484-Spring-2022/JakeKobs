import React, { useState } from "react";
import ProxyList from "../jsonData/proxies.json";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

export default function ProxyMenu({ parentCallback }) {
  const [showModal, setShow] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const [isDisabled2, setDisabled2] = useState(true);
  const [proxyGroup, setProxyGroup] = useState(
    ProxyList.proxygroups[0].groupname
  );
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [proxyGroupName, setProxyGroupName] = useState("");
  const [proxyListItems, setProxyListItems] = useState("");

  const AddProxyGroup = () => {
    console.log("Add proxy group clicked");
    setShow(true);
  };

  const SubmitProxyGroup = async () => {
    await axios.post("http://localhost:3600/proxygroups", {
      id: ProxyList.proxygroups.indexOf(-1).id + 1,
      groupname: proxyGroupName,
      proxies: proxyListItems,
    });
  };
  const DeleteCurrentGroup = async () => {
    let groupId = ProxyList.proxygroups.find(
      (group) => group.groupname == proxyGroup
    ).id;
    console.log(groupId);
    await axios.delete(`http://localhost:3600/proxygroups/${groupId}`);
  };
  const OnGroupNameChange = (e) => {
    if (e.target.value !== "") {
      setDisabled(false);
      setProxyGroupName(e.target.value);
    } else {
      setDisabled(true);
    }
  };

  const OnProxyListChange = (e) => {
    if (e.target.value !== "") {
      setDisabled2(false);
      setProxyListItems(e.target.value.split("\n"));
    } else {
      setDisabled2(true);
    }
  };
  return (
    <nav className="pt-2 pb-2 navbar navbar-light bg-light border-bottom">
      <form className="container-fluid justify-content-start">
        <button
          className="btn btn-sm btn-success me-4"
          type="button"
          onClick={() => AddProxyGroup()}
        >
          Add Proxy Group
        </button>
        <button className="btn btn-sm btn-outline-success me-4" type="button">
          Add Proxies to Current Group
        </button>
        <button
          className="btn btn-sm btn-danger me-4"
          type="button"
          onClick={() => DeleteCurrentGroup()}
        >
          Delete Current Group
        </button>

        <select
          className="m-auto"
          onChange={(e) => {
            setProxyGroup(e.target.value);
            parentCallback(e.target.value);
            console.log(proxyGroup);
          }}
        >
          {ProxyList.proxygroups.map((group) => {
            return <option value={group.groupname}>{group.groupname}</option>;
          })}
        </select>
      </form>
      <Modal
        className="w-150"
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title style={{ margin: "auto" }}>Add Proxy Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mt-2 mb-4 w-75 m-auto">
              <input
                type="text"
                className="w-100"
                placeholder="Enter proxy group name"
                onChange={OnGroupNameChange}
              />
            </Form.Group>
            <Form.Group className="mt-2 mb-4 m-auto">
              <textarea
                style={{ resize: "none" }}
                className="w-100"
                onChange={OnProxyListChange}
              ></textarea>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            disabled={isDisabled !== false || isDisabled2 !== false}
            onClick={SubmitProxyGroup}
          >
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
