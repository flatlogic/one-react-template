import React from "react";
import { Row, Col } from "reactstrap";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import Widget from "../../components/Widget";

class Maps extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col lg={12}>
            <Widget title={<p style={{ fontWeight: 700 }}>Google Maps</p>}>
              <div
                style={{
                  position: "relative",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  height: "500px",
                    margin: '0 -30px -30px'
                }}
              >
                <LoadScript googleMapsApiKey="AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg">
                  <GoogleMap mapContainerStyle={{ height: 'inherit', width: 'inherit' }} zoom={12}
                    center={{ lat: -37.813179, lng: 144.950259 }}>
                    <Marker position={{ lat: -37.813179, lng: 144.950259 }} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Maps;
