import React from "react";
import { Col, Row } from "reactstrap";
import Widget from "../../components/Widget";

const Typography = () => {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <Widget title={"Headings"}>
            <h1>h1. Heading</h1>
            <h2>h2. Heading</h2>
            <h3>h3. Heading</h3>
            <h4>h4. Heading</h4>
            <h5>h5. Heading</h5>
            <h6>h6. Heading</h6>
          </Widget>
        </Col>
        <Col lg={6}>
          <Widget title={"Typography Colors"}>
            <h1 style={{ color: "#323232" }}>h1. Heading</h1>
            <h2 className={"text-warning"}>h2. Heading</h2>
            <h3 className={"text-danger"}>h3. Heading</h3>
            <h4 className={"text-success"}>h4. Heading</h4>
            <h5 className={"text-primary"}>h5. Heading</h5>
            <h6 className={"text-info"}>h6. Heading</h6>
          </Widget>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Widget title={"Basic Text Settings"}>
            <p>
              You can use the mark tag to <mark>highlight</mark> text.
            </p>
            <p>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p>
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>
            <p>
              <strong>This line rendered as bold text.</strong>
            </p>
          </Widget>
        </Col>
        <Col lg={6}>
          <Widget title={"Text Size"}>
            <h1 className="display-1">Display 1</h1>
            <h1 className="display-2">Display 2</h1>
            <h1 className="display-3">Display 3</h1>
            <h1 className="display-4">Display 4</h1>
          </Widget>
        </Col>
      </Row>
    </div>
  );
};

export default Typography;
