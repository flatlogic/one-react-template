import React from "react";
import { Col, ListGroup, ListGroupItem, Row, Badge } from "reactstrap";

import s from "./ListGroup.module.scss";

import n1 from "../../../images/people/n1.png";
import n2 from "../../../images/people/n2.png";
import n3 from "../../../images/people/n3.png";
import n4 from "../../../images/people/n4.png";
import arrowRight from "../../../images/arrow-right.svg";

class MessagesDemo extends React.Component {
  render() {
    return (
      <ListGroup className={[s.listGroup, "thin-scroll"].join(" ")}>
        <p className={`${s.listGroupTitle}`}>New Messages</p>
        <p className={`${s.listGroupSubtitle}`}>5 new messages</p>
        <p className={`${s.listGroupTime} mb-0`}>Today</p>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon].join(" ")}>
            <img className="rounded-circle" src={n1} alt="..." />
          </span>
          <Row noGutters>
            <Col sm={"10"}>
              <div className="m-0 overflow-hidden">
                <p className={"fw-semi-bold mb-0"}>Jim Tomson</p> Hey! How is it
                going?
              </div>
            </Col>
            <Col
              sm={"2"}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Badge pill className={`${s.messagesBadge}`}>
                1
              </Badge>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon].join(" ")}>
            <img className="rounded-circle" src={n2} alt="..." />
          </span>
          <Row noGutters>
            <Col sm={"10"}>
              <div className="m-0 overflow-hidden">
                <p className={"fw-semi-bold mb-0"}>Elena Bureeva</p> Good news!
              </div>
            </Col>
            <Col
              sm={"2"}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Badge pill className={`${s.messagesBadge}`}>
                2
              </Badge>
            </Col>
          </Row>
        </ListGroupItem>
        <p className={`${s.listGroupTime} mb-0`}>Yesterday</p>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon].join(" ")}>
            <img className="rounded-circle" src={n3} alt="..." />
          </span>
          <Row noGutters>
            <Col sm={"10"}>
              <div className="m-0 overflow-hidden">
                <p className={"fw-semi-bold mb-0"}>Jane Tomson</p> I want to
                create new admin template ...
              </div>
            </Col>
            <Col
              sm={"2"}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Badge pill className={`${s.messagesBadge}`}>
                1
              </Badge>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon].join(" ")}>
            <img className="rounded-circle" src={n4} alt="..." />
          </span>
          <Row noGutters>
            <Col sm={"10"}>
              <div className="m-0 overflow-hidden">
                <p className={"fw-semi-bold mb-0"}>Anna Bureeva</p> Good news!
              </div>
            </Col>
            <Col
              sm={"2"}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Badge pill className={`${s.messagesBadge}`}>
                1
              </Badge>
            </Col>
          </Row>
        </ListGroupItem>
        <div className={s.seeMoreBlock}>
          <p className={`${s.seeMore} mb-3`}>See more</p>
          <img src={arrowRight} alt="arrow" className={"mb-3 mr-3"} />
        </div>
      </ListGroup>
    );
  }
}

export default MessagesDemo;
