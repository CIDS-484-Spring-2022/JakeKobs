import React, { useState } from "react";
import AccountList from "../jsonData/Accounts.json";
import { Modal, Button, Form } from "react-bootstrap";

import axios from "axios";
export default function AccountMenu({ parentCallback }) {
  let [accountList, setAccountList] = useState([]);
  const [showAddAccModal, setShowAddAccModal] = useState(false);
  const [showUpdateAccModal, setShowUpdateAccModal] = useState(false);
  const showAddModal = () => setShowAddAccModal(true);
  const showUpdateModal = () => setShowUpdateAccModal(true);
  const handleClose = () => setShowAddAccModal(false);
  const [accountGroup, setAccountGroup] = useState(
    AccountList.accountgroups.length > 0
      ? AccountList.accountgroups[0].groupname
      : ""
  );

  const OnGroupNameChange = (e) => {
    setAccountGroup(e.target.value);
  };
  const OnGroupListChange = (e) => {
    setAccountList(e.target.value.split("\n"));
  };

  const AddAccountGroup = () => {
    showAddModal();
    console.log("Add acc group btn");
  };

  const AddToCurrentGroup = () => {
    console.log("current group btn");
  };

  const SubmitAccountGroup = async () => {
    let formattedAccList = [];
    let formattedAccs = accountList.forEach((acc) => {
      formattedAccList.push({
        username: acc.split(":")[0],
        password: acc.split(":")[1],
      });
    });
    await axios.post("http://localhost:3700/accountgroups", {
      id: AccountList.accountgroups.indexOf(-1).id,
      groupname: accountGroup,
      accs: formattedAccList,
    });
  };
  const DeleteCurrentGroup = async () => {
    let accountGroupId = AccountList.accountgroups.find(
      (group) => group.groupname === accountGroup
    ).id;
    await axios.delete(`http://localhost:3700/accountgroups/${accountGroupId}`);
  };
  return (
    <nav className="pt-2 pb-2 navbar navbar-light bg-light border-bottom">
      <form className="container-fluid justify-content-start">
        <button
          className="btn btn-sm btn-success me-4"
          type="button"
          onClick={AddAccountGroup}
        >
          Add Account Group
        </button>
        <button
          className="btn btn-sm btn-outline-success me-4"
          type="button"
          onClick={AddToCurrentGroup}
        >
          Add Accounts to Current Group
        </button>
        <button
          className="btn btn-sm btn-danger me-4"
          type="button"
          onClick={DeleteCurrentGroup}
        >
          Delete Current Group
        </button>

        <select
          className="m-auto"
          onChange={(e) => {
            setAccountGroup(e.target.value);
            parentCallback(e.target.value);
          }}
        >
          {AccountList.accountgroups.map((group) => {
            return <option value={group.groupname}>{group.groupname}</option>;
          })}
        </select>
      </form>
      <Modal
        className="w-150"
        show={showAddAccModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title style={{ margin: "auto" }}>
            Add Account Group
          </Modal.Title>
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
                onChange={OnGroupListChange}
              ></textarea>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            disabled={accountGroup.length === 0 || accountList.length === 0}
            onClick={SubmitAccountGroup}
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
