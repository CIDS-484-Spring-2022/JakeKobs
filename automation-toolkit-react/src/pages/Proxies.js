import React, { Fragment, useCallback, useState } from "react";
import ProxyList from "../jsonData/proxies.json";
import ProxyMenu from "../components/ProxyMenu";
import ProxyTableHead from "../components/ProxyTableHead";
import ProxyListItem from "../components/ProxyListItem";
import axios from "axios";
export default function Proxies() {
  const [proxyGroup, setProxyGroup] = useState(
    ProxyList.proxygroups[0].groupname
  );

  const callback = useCallback((proxyGroup) => {
    setProxyGroup(proxyGroup);
  });
  return (
    <div>
      <ProxyMenu parentCallback={callback} />
      <table className="table table-striped">
        <ProxyTableHead />
        <tbody>
          {ProxyList.proxygroups
            .filter((group) => {
              return group.groupname === proxyGroup;
            })
            .map((proxyGroup) => {
              return proxyGroup.proxies.map((prox, idx) => {
                console.log(prox);
                return <ProxyListItem key={idx} item={prox} />;
              });
            })}
        </tbody>
      </table>
    </div>
  );
}
