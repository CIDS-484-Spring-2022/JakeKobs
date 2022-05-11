import React, { Fragment, useCallback, useState } from "react";
import ProxyList from "../jsonData/proxies.json";
import ProxyMenu from "../components/ProxyMenu";
import ProxyTableHead from "../components/ProxyTableHead";
import ProxyListItem from "../components/ProxyListItem";
import axios from "axios";
export default function Proxies() {
  const [proxyGroup, setProxyGroup] = useState(
    ProxyList.proxygroups.length > 0 ? ProxyList.proxygroups[0].groupname : ""
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
            .filter((group) => group.groupname === proxyGroup)
            .map((proxyGroup) => {
              return proxyGroup.proxies.map((prox, idx) => (
                <ProxyListItem
                  key={idx}
                  item={prox}
                  index={idx}
                  group={proxyGroup.groupname}
                  id={proxyGroup.id}
                />
              ));
            })}
        </tbody>
      </table>
    </div>
  );
}
