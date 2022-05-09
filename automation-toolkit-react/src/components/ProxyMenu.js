import React, { useState } from "react";
import ProxyList from "../jsonData/proxies.json";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

export default function ProxyMenu({ parentCallback }) {
  //   const [showModal, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const [proxyGroup, setProxyGroup] = useState(
    ProxyList.proxygroups[0].groupname
  );
  return (
    <nav className="pt-2 pb-2 navbar navbar-light bg-light border-bottom">
      <form className="container-fluid justify-content-start">
        <button className="btn btn-sm btn-success me-4" type="button">
          Add Proxy Group
        </button>
        <button className="btn btn-sm btn-outline-success me-4" type="button">
          Add Proxies to Current Group
        </button>
        <button className="btn btn-sm btn-danger me-4" type="button">
          Delete Current Group
        </button>

        <select
          className="m-auto"
          onChange={(e) => {
            setProxyGroup(e.target.value);
            parentCallback(e.target.value);
          }}
        >
          {ProxyList.proxygroups.map((group) => {
            return <option value={group.groupname}>{group.groupname}</option>;
          })}
        </select>
      </form>
    </nav>
  );
}
