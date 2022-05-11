import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import ProxyList from "../jsonData/proxies.json";

export default function ProxyListItem(props) {
  let { item, index, group, id } = props;
  const RemoveProxy = async () => {
    console.log(item + "\n" + index + "\n" + group);
    let proxyToDelete = ProxyList.proxygroups.find(
      (val) => val.groupname === group
    ).proxies[index]; //get proxy that should be deleted

    let updatedProxyList = ProxyList.proxygroups
      .find((val) => val.groupname === group)
      .proxies.filter((proxy) => proxy !== proxyToDelete); //Return list of proxies without proxy that should be deleted
    console.log(`Proxy to delete: ${updatedProxyList}`);
    await axios.delete(`http://localhost:3600/proxygroups/${id}`).then(
      await axios.post(`http://localhost:3600/proxygroups`, {
        id,
        groupname: group,
        proxies: updatedProxyList,
      })
    );
  };
  return (
    <tr>
      <td style={{ textAlign: "center" }}>{item}</td>
      <td style={{ textAlign: "center" }}>
        <button className="btn btn-danger" onClick={RemoveProxy}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </td>
    </tr>
  );
}
