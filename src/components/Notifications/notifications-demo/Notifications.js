import React from "react";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";

import s from "./ListGroup.module.scss";

import a3 from "../../../images/people/p1.svg";
import a5 from "../../../images/people/p2.svg";

class NotificationsDemo extends React.Component {
  render() {
    return (
      <ListGroup className={[s.listGroup, "thin-scroll"].join(" ")}>
        <p className={`${s.listGroupTime} mb-0`}>Today</p>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon].join(" ")}>
            <img className="rounded-circle" src={a3} alt="..." />
          </span>
          <Row noGutters>
            <Col sm={"10"}>
              <p className="m-0 overflow-hidden">
                <span>Jim Tomson</span> removed you to the project{" "}
                <span>Flatlogic One</span>
              </p>
            </Col>
            <Col sm={"2"} style={{display: 'flex', justifyContent: 'flex-end'}}>
                <time className={`${s.listGroupTime}`} style={{fontSize: 8, padding: '6px 0 0 0'}}>9:15 AM</time></Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon].join(" ")}>
            <img className="rounded-circle" src={a5} alt="..." />
          </span>
            <Row noGutters>
                <Col sm={"10"}>
                    <p className="m-0 overflow-hidden">
                        <span>Elena Bureeva</span> invited you to the project{" "}
                        <span>Flatlogic One</span>
                    </p>
                </Col>
                <Col sm={"2"} style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <time className={`${s.listGroupTime}`} style={{fontSize: 8, padding: '6px 0 0 0'}}>9:15 AM</time></Col>
            </Row>
        </ListGroupItem>
        <p className={`${s.listGroupTime} mb-0`}>Yesterday</p>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
            <img className="rounded-circle" src={a3} alt="..." />
          </span>
            <Row noGutters>
                <Col sm={"10"}>
                    <p className="m-0 overflow-hidden">
                        <span>Jim Tomson</span> removed you to the project{" "}
                        <span>Flatlogic One</span>
                    </p>
                </Col>
                <Col sm={"2"} style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <time className={`${s.listGroupTime}`} style={{fontSize: 8, padding: '6px 0 0 0'}}>9:15 AM</time></Col>
            </Row>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
            <img className="rounded-circle" src={a5} alt="..." />
          </span>
            <Row noGutters>
                <Col sm={"10"}>
                    <p className="m-0 overflow-hidden">
                        <span>Elena Bureeva</span> invited you to the project{" "}
                        <span>Flatlogic One</span>
                    </p>
                </Col>
                <Col sm={"2"} style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <time className={`${s.listGroupTime}`} style={{fontSize: 8, padding: '6px 0 0 0'}}>9:15 AM</time></Col>
            </Row>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default NotificationsDemo;
