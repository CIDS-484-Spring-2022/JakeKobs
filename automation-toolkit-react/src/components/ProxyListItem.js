import React from "react";

export default function ProxyListItem(props) {
  return (
    <tr>
      <td style={{ textAlign: "center" }}>{props.item.proxy}</td>
      <td style={{ textAlign: "center" }}>placeholder</td>
    </tr>
  );
}
