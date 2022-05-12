import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountList from "../jsonData/Accounts.json";
import axios from "axios";
export default function AccountListItem(props) {
  let { account, index, accountGroup } = props;
  const RemoveAccount = async () => {
    let accountGroupId = AccountList.accountgroups.find(
      (group) => group.groupname === accountGroup
    ).id;
    let updatedAccountList = AccountList.accountgroups
      .find((group) => group.groupname === accountGroup)
      .accs.filter((group) => group.username !== account.username);
    console.log(updatedAccountList);
    await axios
      .delete(`http://localhost:3700/accountgroups/${accountGroupId}`)
      .then(async () => {
        await axios.post(`http://localhost:3700/accountgroups`, {
          id: accountGroupId,
          groupname: accountGroup,
          accs: updatedAccountList,
        });
      });
  };
  return (
    <tr>
      <td style={{ textAlign: "center" }}>{account.username}</td>
      <td style={{ textAlign: "center" }}>{account.password}</td>
      <td style={{ textAlign: "center" }}>
        <button className="btn btn-danger" onClick={RemoveAccount}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </td>
    </tr>
  );
}
