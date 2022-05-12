import React, { useCallback, useState } from "react";
import AccountMenu from "../components/AccountMenu";
import AccountList from "../jsonData/Accounts.json";
import AccountListItem from "../components/AccountListItem";
import AccountTableHead from "../components/AccountTableHead";
export default function Accounts() {
  const [accountGroup, setAccountGroup] = useState(
    AccountList.accountgroups.length > 0
      ? AccountList.accountgroups[0].groupname
      : ""
  );
  const callback = useCallback((accountGroup) => {
    setAccountGroup(accountGroup);
  });

  return (
    <div>
      <AccountMenu parentCallback={callback} />
      <table className="table table-striped">
        <AccountTableHead />
        <tbody>
          {AccountList.accountgroups
            .find((group) => group.groupname === accountGroup)
            .accs.map((acc, index) => {
              return (
                <AccountListItem account={acc} accountGroup={accountGroup} />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
