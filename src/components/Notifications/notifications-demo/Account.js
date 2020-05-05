import React from "react";
import {  ListGroup, ListGroupItem } from "reactstrap";

import s from "./ListGroup.module.scss";

import settingsIcon from "../../../images/settings.svg";
import logoutIcon from "../../../images/logout.svg";
import accountIcon from "../../../images/account.svg";

class MessagesDemo extends React.Component {
  render() {
    return (
      <ListGroup className={[s.listGroupAccount, "thin-scroll"].join(" ")}>
        <p className={`${s.listGroupTitleAccount}`}>Sara Smith</p>
        <p className={`${s.listGroupSubtitleAccount}`}>Sara_smith@gmail.com</p>
        <ListGroupItem className={`${s.listGroupItemAccount} mt-3`}>
          <img src={settingsIcon} alt="settings" className={"mr-2"} /> Settings
        </ListGroupItem>
        <ListGroupItem className={`${s.listGroupItemAccount} mt-2`}>
          <img src={accountIcon} alt="settings" className={"mr-2"} /> Account
        </ListGroupItem>
        <ListGroupItem className={`${s.listGroupItemAccount} mt-2 mb-3`}>
          <img src={logoutIcon} alt="settings" className={"mr-2"} /> Log out
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default MessagesDemo;
