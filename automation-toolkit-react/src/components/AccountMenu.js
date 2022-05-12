import React, { useState } from "react";
import AccountList from "../jsonData/Accounts.json";

export default function AccountMenu({ parentCallback }) {
  const [accountGroup, setAccountGroup] = useState(
    AccountList.accountgroups.length > 0
      ? AccountList.accountgroups[0].groupname
      : ""
  );
  return (
    <nav className="pt-2 pb-2 navbar navbar-light bg-light border-bottom">
      <form className="container-fluid justify-content-start">
        <button
          className="btn btn-sm btn-success me-4"
          type="button"
          //   onClick={() => AddProxyGroup()}
        >
          Add Account Group
        </button>
        <button
          className="btn btn-sm btn-outline-success me-4"
          type="button"
          //   onClick={AddToCurrentGroup}
        >
          Add Accounts to Current Group
        </button>
        <button
          className="btn btn-sm btn-danger me-4"
          type="button"
          //   onClick={() => DeleteCurrentGroup()}
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
    </nav>
  );
}
