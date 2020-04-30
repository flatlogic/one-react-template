import React from "react";
import { Row, Col } from "reactstrap";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";

import Widget from "../../components/Widget";

const BasicMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: parseFloat(-37.813179),
        lng: parseFloat(144.950259)
      }}
    >
      <Marker position={{ lat: -37.813179, lng: 144.950259 }} />
    </GoogleMap>
  ))
);

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
                <BasicMap
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
                  loadingElement={<div style={{ height: 'inherit', width: 'inherit' }} />}
                  containerElement={<div style={{ height: 'inherit' }} />}
                  mapElement={<div style={{ height: 'inherit' }} />}
                />
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Maps;
