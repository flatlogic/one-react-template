import React from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Row, Col,
} from 'reactstrap';
import classnames from 'classnames';

import dashboardLight from '../../images/light-dashboard.svg'
import dashboardDark from '../../images/dark-dashboard.svg'
import chartLight from '../../images/icons/Charts_outlined.svg'
import chartDark from '../../images/icons/Charts_filled.svg'
import coreLight from '../../images/icons/Core_outlined.svg'
import documentationLight from '../../images/icons/Documentation_outlined.svg'
import documentationDark from '../../images/icons/Documentation_filled.svg'
import coreDark from '../../images/icons/Core_filled.svg'
import eccomerceLight from '../../images/icons/E-commerce_outlined.svg'
import eccomerceDark from '../../images/icons/E-commerce_filled.svg'
import formsLight from '../../images/icons/Forms_outlined.svg'
import formsDark from '../../images/icons/Forms_filled.svg'
import gridLight from '../../images/icons/Grid_outlined.svg'
import gridDark from '../../images/icons/Grid_filled.svg'
import mapsLight from '../../images/icons/Maps_outlined.svg'
import mapsDark from '../../images/icons/Maps_filled.svg'
import emailLight from '../../images/icons/Email_outlined.svg'
import emailDark from '../../images/icons/Email_filled.svg'
import logoutLight from '../../images/icons/Logout_outlined.svg'
import logoutDark from '../../images/icons/Logout_filled.svg'
import packLight from '../../images/icons/Package_outlined.svg'
import packDark from '../../images/icons/Package_filled.svg'
import profileLight from '../../images/icons/Profile_outlined.svg'
import profileDark from '../../images/icons/Profile_filled.svg'
import settingsLight from '../../images/icons/Settings_outlined.svg'
import settingsDark from '../../images/icons/Settings_filled.svg'
import tablesLight from '../../images/icons/Tables_outlined.svg'
import tablesDark from '../../images/icons/Tables_filled.svg'
import typoLight from '../../images/icons/Typography_outlined.svg'
import typoDark from '../../images/icons/Typography_filled.svg'
import uiLight from '../../images/icons/ui elements_outlined.svg'
import uiDark from '../../images/icons/ui elements_filled.svg'

import s from './Icons.module.scss';
import Footer from "../../components/Footer/Footer";

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    return (
      <section className={`${s.root} mb-4`}>
        {/* tabs */}
        <Nav className="bg-light" tabs>
          <NavItem>
            <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
            >
              <span>Flatlogic One Icons</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <span>Glypicons</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <span className="mr-xs">FA 4.7.0</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              <span className="mr-xs">Web Application</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              <span>Text Editor</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              <span>Brand</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => { this.toggle('7'); }}
            >
              <span>Other</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '8' })}
              onClick={() => { this.toggle('8'); }}
            >
              <span className="mr-xs">Flaticons</span>
            </NavLink>
          </NavItem>
        </Nav>

        {/* tab content */}

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div>
              <h4>Flatlogic <span className="fw-semi-bold">One</span> Icons</h4>
              <Row className="icon-list">
                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file"><img src={dashboardLight} alt="" width={"15px"} style={{marginRight: 25}}/> dashboard-light</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={dashboardDark} alt="" width={"15px"} style={{marginRight: 25}}/> dashboard-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file"><img src={chartLight} alt="" width={"15px"} style={{marginRight: 25}}/> charts-light</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={chartDark} alt="" width={"15px"} style={{marginRight: 25}}/> charts-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file"><img src={documentationLight} alt="" width={"15px"} style={{marginRight: 25}}/> documentation-light</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={documentationDark} alt="" width={"15px"} style={{marginRight: 25}}/> documentation-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file"><img src={coreLight} alt="" width={"15px"} style={{marginRight: 25}}/> core-light</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file"><img src={coreDark} alt="" width={"15px"} style={{marginRight: 25}}/> core-dark</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file"><img src={eccomerceLight} alt="" width={"15px"} style={{marginRight: 25}}/> eccomerce-light</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={eccomerceDark} alt="" width={"15px"} style={{marginRight: 25}}/> eccomerce-dark</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file"><img src={formsLight} alt="" width={"15px"} style={{marginRight: 25}}/> forms-light</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={formsDark} alt="" width={"15px"} style={{marginRight: 25}}/> extra-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file"><img src={gridLight} alt="" width={"15px"} style={{marginRight: 25}}/> grid-light</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={gridDark} alt="" width={"15px"} style={{marginRight: 25}}/> grid-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file"><img src={mapsLight} alt="" width={"15px"} style={{marginRight: 25}}/> maps-light</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={mapsDark} alt="" width={"15px"} style={{marginRight: 25}}/> maps-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={emailLight} alt="" width={"15px"} style={{marginRight: 25}}/> email-light</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={emailDark} alt="" width={"15px"} style={{marginRight: 25}}/> email-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={logoutLight} alt="" width={"15px"} style={{marginRight: 25}}/> logout-light</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={logoutDark} alt="" width={"15px"} style={{marginRight: 25}}/> logout-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={packLight} alt="" width={"15px"} style={{marginRight: 25}}/> packages-light</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={packDark} alt="" width={"15px"} style={{marginRight: 25}}/> packages-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={profileLight} alt="" width={"15px"} style={{marginRight: 25}}/> profile-light</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={profileDark} alt="" width={"15px"} style={{marginRight: 25}}/> profile-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={settingsLight} alt="" width={"15px"} style={{marginRight: 25}}/> settings-light</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={settingsDark} alt="" width={"15px"} style={{marginRight: 25}}/> settings-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={tablesLight} alt="" width={"15px"} style={{marginRight: 25}}/> tables-light</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={tablesDark} alt="" width={"15px"} style={{marginRight: 25}}/> tables-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={typoLight} alt="" width={"15px"} style={{marginRight: 25}}/> typography-light</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={typoDark} alt="" width={"15px"} style={{marginRight: 25}}/> typography-dark</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={uiLight} alt="" width={"15px"} style={{marginRight: 25}}/> ui_elements-light</a></Col>
                <Col className="icon-list-item" lg={3}  xs={12}><a
                    href="../icon/file-archive-o"
                ><img src={uiDark} alt="" width={"15px"} style={{marginRight: 25}}/> ui_elements-dark</a></Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div>
              <h4>Built-in <span className="fw-semi-bold">Glyphicons</span></h4>
              <Row className="icon-list">
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-asterisk" />asterisk</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-plus" />plus</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-euro" />euro</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-minus" />minus</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-cloud" />cloud</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-envelope" />envelope</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-pencil"
                />pencil</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-glass" />glass</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-music" />music</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-search"
                />search</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-heart" />heart</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-star" />star</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-star-empty" />star-empty</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-user" />user</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-film" />film</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-th-large" />th-large</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-th" />th</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-th-list"
                />th-list</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-ok" />ok</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-remove"
                />remove</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-zoom-in"
                />zoom-in</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-zoom-out" />zoom-out</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-off" />off</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-signal"
                />signal</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-cog" />cog</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-trash" />trash</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-home" />home</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-file" />file</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-time" />time</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-road" />road</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-download-alt" />download-alt</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-download" />download</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-upload"
                />upload</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-inbox" />inbox</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-play-circle" />play-circle</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-repeat"
                />repeat</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-refresh"
                />refresh</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-list-alt" />list-alt</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-glyph-lock"
                />lock</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-flag" />flag</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-headphones" />headphones</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-volume-off" />volume-off</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-volume-down" />volume-down</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-volume-up" />volume-up</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-qrcode"
                />qrcode</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-barcode"
                />barcode</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-tag" />tag</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-tags" />tags</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-book" />book</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-glyph-bookmark" />bookmark</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-print" />print</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-glyph-camera" />camera</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-font" />font</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-bold" />bold</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-italic"
                />italic</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-text-height" />text-height</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-text-width" />text-width</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-align-left" />align-left</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-align-center" />align-center</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-align-right" />align-right</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-align-justify" />align-justify</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-list" />list</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-indent-left" />indent-left</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-indent-right" />indent-right</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-facetime-video" />facetime-video</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-picture"
                />picture</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-map-marker" />map-marker</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-adjust"
                />adjust</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-tint" />tint</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-edit" />edit</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-share" />share</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-check" />check</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-move" />move</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-step-backward" />step-backward</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-fast-backward" />fast-backward</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-backward" />backward</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-play" />play</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-pause" />pause</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-stop" />stop</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-forward"
                />forward</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-fast-forward" />fast-forward</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-step-forward" />step-forward</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-eject" />eject</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-chevron-left" />chevron-left</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-chevron-right" />chevron-right</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-plus-sign" />plus-sign</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-minus-sign" />minus-sign</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-remove-sign" />remove-sign</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-ok-sign"
                />ok-sign</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-question-sign" />question-sign</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-info-sign" />info-sign</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-screenshot" />screenshot</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-remove-circle" />remove-circle</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-ok-circle" />ok-circle</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-ban-circle" />ban-circle</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-arrow-left" />arrow-left</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-arrow-right" />arrow-right</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-arrow-up" />arrow-up</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-arrow-down" />arrow-down</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-share-alt" />share-alt</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-resize-full" />resize-full</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-resize-small" />resize-small</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-exclamation-sign" />exclamation-sign</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-gift" />gift</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-leaf" />leaf</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-glyph-fire"
                />fire</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-eye-open" />eye-open</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-eye-close" />eye-close</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-warning-sign" />warning-sign</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-plane" />plane</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-glyph-calendar" />calendar</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-random"
                />random</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-comment"
                />comment</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-magnet"
                />magnet</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-chevron-up" />chevron-up</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-chevron-down" />chevron-down</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-retweet"
                />retweet</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-shopping-cart" />shopping-cart</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-folder-close" />folder-close</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-folder-open" />folder-open</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-resize-vertical" />resize-vertical</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-resize-horizontal" />resize-horizontal</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-hdd" />hdd</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-bullhorn" />bullhorn</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-glyph-bell"
                />bell</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-certificate" />certificate</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-thumbs-up" />thumbs-up</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-thumbs-down" />thumbs-down</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-hand-right" />hand-right</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-hand-left" />hand-left</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-hand-top"
                />hand-up</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-hand-down" />hand-down</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-circle-arrow-right"
                />circle-arrow-right</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-circle-arrow-left" />circle-arrow-left</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-circle-arrow-top" />circle-arrow-up</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-circle-arrow-down" />circle-arrow-down</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-globe" />globe</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-glyph-wrench" />wrench</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-tasks" />tasks</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-filter"
                />filter</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-glyph-briefcase" />briefcase</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-fullscreen" />fullscreen</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-dashboard" />dashboard</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-glyph-paperclip" />paperclip</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-heart-empty" />heart-empty</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-link" />link</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-phone" />phone</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-glyph-pushpin" />pushpin</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-usd" />usd</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-gbp" />gbp</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-sort" />sort</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-sort-by-alphabet" />sort-by-alphabet</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-sort-by-alphabet-alt"
                />sort-by-alphabet-alt</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-sort-by-order" />sort-by-order</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-sort-by-order-alt" />sort-by-order-alt</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-sort-by-attributes"
                />sort-by-attributes</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-sort-by-attributes-alt"
                />sort-by-attributes-alt</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-unchecked" />unchecked</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span
                  className="glyphicon glyphicon-expand"
                />expand</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-collapse" />collapse-down</Col>
                <Col  lg={3} xs={12} className="icon-list-item"><span className="glyphicon glyphicon-collapse-top" />collapse-up</Col>
              </Row>
            </div>
          </TabPane>

          {/* tab #2 */}
          <TabPane tabId="3">
            <div>
              <h4>Awesome <span className="fw-semi-bold">Font Awesome</span></h4>
              <Row className="icon-list">
                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/bed"><i
                  className="fa fa-bed"
                /> bed</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/university"
                ><i className="fa fa-bank" /> bank <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/behance"><i
                  className="fa fa-behance"
                /> behance</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/behance-square"
                ><i className="fa fa-behance-square" /> behance-square</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/bomb"><i
                  className="fa fa-bomb"
                /> bomb</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/building"><i
                  className="fa fa-building"
                /> building</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/taxi"><i
                  className="fa fa-cab"
                /> cab <span className="text-muted">(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/car"><i
                  className="fa fa-car"
                /> car</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/child"><i
                  className="fa fa-child"
                /> child</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/circle-o-notch"
                ><i className="fa fa-circle-o-notch" /> circle-o-notch</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/circle-thin"><i
                  className="fa fa-circle-thin"
                /> circle-thin</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/codepen"><i
                  className="fa fa-codepen"
                /> codepen</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/cube"><i
                  className="fa fa-cube"
                /> cube</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/cubes"><i
                  className="fa fa-cubes"
                /> cubes</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/database"><i
                  className="fa fa-database"
                /> database</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/delicious"><i
                  className="fa fa-delicious"
                /> delicious</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/deviantart"
                ><i className="fa fa-deviantart" /> deviantart</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/digg"><i
                  className="fa fa-digg"
                /> digg</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/drupal"><i
                  className="fa fa-drupal"
                /> drupal</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/empire"><i
                  className="fa fa-empire"
                /> empire</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/envelope-square"
                ><i className="fa fa-envelope-square" />
                  envelope-square</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/fax"><i
                  className="fa fa-fax"
                /> fax</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/file-archive-o"
                ><i className="fa fa-file-archive-o" /> file-archive-o</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/file-audio-o"
                ><i className="fa fa-file-audio-o" />
                  file-audio-o</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/file-code-o"><i
                  className="fa fa-file-code-o"
                /> file-code-o</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/file-excel-o"
                ><i className="fa fa-file-excel-o" />
                  file-excel-o</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/file-image-o"
                ><i className="fa fa-file-image-o" />
                  file-image-o</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/file-video-o"
                ><i className="fa fa-file-movie-o" /> file-movie-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/file-pdf-o"
                ><i className="fa fa-file-pdf-o" /> file-pdf-o</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/file-image-o"
                ><i className="fa fa-file-photo-o" /> file-photo-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/file-image-o"
                ><i className="fa fa-file-picture-o" /> file-picture-o
                  <span className="text-muted">(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/file-powerpoint-o"
                ><i className="fa fa-file-powerpoint-o" />
                  file-powerpoint-o</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/file-audio-o"
                ><i className="fa fa-file-sound-o" /> file-sound-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/file-video-o"
                ><i className="fa fa-file-video-o" />
                  file-video-o</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/file-word-o"><i
                  className="fa fa-file-word-o"
                /> file-word-o</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/file-archive-o"
                ><i className="fa fa-file-zip-o" /> file-zip-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/empire"><i
                  className="fa fa-ge"
                /> ge <span className="text-muted">(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/git"><i
                  className="fa fa-git"
                /> git</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/git-square"
                ><i className="fa fa-git-square" /> git-square</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/google"><i
                  className="fa fa-google"
                /> google</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/graduation-cap"
                ><i className="fa fa-graduation-cap" /> graduation-cap</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/hacker-news"><i
                  className="fa fa-hacker-news"
                /> hacker-news</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/header"><i
                  className="fa fa-header"
                /> header</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/history"><i
                  className="fa fa-history"
                /> history</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/university"
                ><i className="fa fa-institution" /> institution <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/joomla"><i
                  className="fa fa-joomla"
                /> joomla</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/jsfiddle"><i
                  className="fa fa-jsfiddle"
                /> jsfiddle</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/language"><i
                  className="fa fa-language"
                /> language</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/life-ring"><i
                  className="fa fa-life-bouy"
                /> life-bouy <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/life-ring"><i
                  className="fa fa-life-ring"
                /> life-ring</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/life-ring"><i
                  className="fa fa-life-saver"
                /> life-saver <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/graduation-cap"
                ><i className="fa fa-mortar-board" /> mortar-board
                  <span className="text-muted">(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/openid"><i
                  className="fa fa-openid"
                /> openid</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/paper-plane"><i
                  className="fa fa-paper-plane"
                /> paper-plane</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/paper-plane-o"
                ><i className="fa fa-paper-plane-o" />
                  paper-plane-o</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/paragraph"><i
                  className="fa fa-paragraph"
                /> paragraph</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/paw"><i
                  className="fa fa-paw"
                /> paw</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/pied-piper"
                ><i className="fa fa-pied-piper" /> pied-piper</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/pied-piper-alt"
                ><i className="fa fa-pied-piper-alt" /> pied-piper-alt</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/pied-piper"
                ><i className="fa fa-pied-piper-square" />
                  pied-piper-square <span className="text-muted">(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/qq"><i
                  className="fa fa-qq"
                /> qq</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/rebel"><i
                  className="fa fa-ra"
                /> ra <span className="text-muted">(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/rebel"><i
                  className="fa fa-rebel"
                /> rebel</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/recycle"><i
                  className="fa fa-recycle"
                /> recycle</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/reddit"><i
                  className="fa fa-reddit"
                /> reddit</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/reddit-square"
                ><i className="fa fa-reddit-square" />
                  reddit-square</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/paper-plane"><i
                  className="fa fa-send"
                /> send <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/paper-plane-o"
                ><i className="fa fa-send-o" /> send-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/share-alt"><i
                  className="fa fa-share-alt"
                /> share-alt</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/share-alt-square"
                ><i className="fa fa-share-alt-square" />
                  share-alt-square</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/slack"><i
                  className="fa fa-slack"
                /> slack</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/sliders"><i
                  className="fa fa-sliders"
                /> sliders</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/soundcloud"
                ><i className="fa fa-soundcloud" /> soundcloud</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/space-shuttle"
                ><i className="fa fa-space-shuttle" />
                  space-shuttle</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/spoon"><i
                  className="fa fa-spoon"
                /> spoon</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/spotify"><i
                  className="fa fa-spotify"
                /> spotify</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/steam"><i
                  className="fa fa-steam"
                /> steam</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/steam-square"
                ><i className="fa fa-steam-square" />
                  steam-square</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/stumbleupon"><i
                  className="fa fa-stumbleupon"
                /> stumbleupon</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/stumbleupon-circle"
                ><i className="fa fa-stumbleupon-circle" />
                  stumbleupon-circle</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/life-ring"><i
                  className="fa fa-support"
                /> support <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/taxi"><i
                  className="fa fa-taxi"
                /> taxi</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/tencent-weibo"
                ><i className="fa fa-tencent-weibo" />
                  tencent-weibo</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/tree"><i
                  className="fa fa-tree"
                /> tree</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a
                  href="../icon/university"
                ><i className="fa fa-university" /> university</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/vine"><i
                  className="fa fa-vine"
                /> vine</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/weixin"><i
                  className="fa fa-wechat"
                /> wechat <span className="text-muted">(alias)</span></a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/weixin"><i
                  className="fa fa-weixin"
                /> weixin</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/wordpress"><i
                  className="fa fa-wordpress"
                /> wordpress</a></Col>

                <Col lg={3}  xs={12} className="icon-list-item"><a href="../icon/yahoo"><i
                  className="fa fa-yahoo"
                /> yahoo</a></Col>
              </Row>
            </div>
          </TabPane>

          {/* tab #3 */}
          <TabPane tabId="4">
            <div>
              <Row className="icon-list">
                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/adjust"><i
                  className="fa fa-adjust"
                /> adjust</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/anchor"><i
                  className="fa fa-anchor"
                /> anchor</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/archive"><i
                  className="fa fa-archive"
                /> archive</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/arrows"><i
                  className="fa fa-arrows"
                /> arrows</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/arrows-h"><i
                  className="fa fa-arrows-h"
                /> arrows-h</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/arrows-v"><i
                  className="fa fa-arrows-v"
                /> arrows-v</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/asterisk"><i
                  className="fa fa-asterisk"
                /> asterisk</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/car"><i
                  className="fa fa-automobile"
                /> automobile <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/ban"><i
                  className="fa fa-ban"
                /> ban</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/university"
                ><i className="fa fa-bank" /> bank <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bar-chart-o"><i
                  className="fa fa-bar-chart-o"
                /> bar-chart-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/barcode"><i
                  className="fa fa-barcode"
                /> barcode</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bars"><i
                  className="fa fa-bars"
                /> bars</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/beer"><i
                  className="fa fa-beer"
                /> beer</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bell"><i
                  className="fa fa-bell"
                /> bell</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bell-o"><i
                  className="fa fa-bell-o"
                /> bell-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bolt"><i
                  className="fa fa-bolt"
                /> bolt</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bomb"><i
                  className="fa fa-bomb"
                /> bomb</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/book"><i
                  className="fa fa-book"
                /> book</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bookmark"><i
                  className="fa fa-bookmark"
                /> bookmark</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/bookmark-o"
                ><i className="fa fa-bookmark-o" /> bookmark-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/briefcase"><i
                  className="fa fa-briefcase"
                /> briefcase</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bug"><i
                  className="fa fa-bug"
                /> bug</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/building"><i
                  className="fa fa-building"
                /> building</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/building-o"
                ><i className="fa fa-building-o" /> building-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bullhorn"><i
                  className="fa fa-bullhorn"
                /> bullhorn</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bullseye"><i
                  className="fa fa-bullseye"
                /> bullseye</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/taxi"><i
                  className="fa fa-cab"
                /> cab <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/calendar"><i
                  className="fa fa-calendar"
                /> calendar</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/calendar-o"
                ><i className="fa fa-calendar-o" /> calendar-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/camera"><i
                  className="fa fa-camera"
                /> camera</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/camera-retro"
                ><i className="fa fa-camera-retro" />
                  camera-retro</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/car"><i
                  className="fa fa-car"
                /> car</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/caret-square-o-down"
                ><i className="fa fa-caret-square-o-down" />
                  caret-square-o-down</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/caret-square-o-left"
                ><i className="fa fa-caret-square-o-left" />
                  caret-square-o-left</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/caret-square-o-right"
                ><i className="fa fa-caret-square-o-right" />
                  caret-square-o-right</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/caret-square-o-up"
                ><i className="fa fa-caret-square-o-up" />
                  caret-square-o-up</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/certificate"><i
                  className="fa fa-certificate"
                /> certificate</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/check"><i
                  className="fa fa-check"
                /> check</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/check-circle"
                ><i className="fa fa-check-circle" />
                  check-circle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/check-circle-o"
                ><i className="fa fa-check-circle-o" /> check-circle-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/check-square"
                ><i className="fa fa-check-square" />
                  check-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/check-square-o"
                ><i className="fa fa-check-square-o" /> check-square-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/child"><i
                  className="fa fa-child"
                /> child</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/circle"><i
                  className="fa fa-circle"
                /> circle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/circle-o"><i
                  className="fa fa-circle-o"
                /> circle-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/circle-o-notch"
                ><i className="fa fa-circle-o-notch" /> circle-o-notch</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/circle-thin"><i
                  className="fa fa-circle-thin"
                /> circle-thin</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/clock-o"><i
                  className="fa fa-clock-o"
                /> clock-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/cloud"><i
                  className="fa fa-cloud"
                /> cloud</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/cloud-download"
                ><i className="fa fa-cloud-download" /> cloud-download</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/cloud-upload"
                ><i className="fa fa-cloud-upload" />
                  cloud-upload</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/code"><i
                  className="fa fa-code"
                /> code</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/code-fork"><i
                  className="fa fa-code-fork"
                /> code-fork</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/coffee"><i
                  className="fa fa-coffee"
                /> coffee</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/cog"><i
                  className="fa fa-cog"
                /> cog</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/cogs"><i
                  className="fa fa-cogs"
                /> cogs</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/comment"><i
                  className="fa fa-comment"
                /> comment</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/comment-o"><i
                  className="fa fa-comment-o"
                /> comment-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/comments"><i
                  className="fa fa-comments"
                /> comments</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/comments-o"
                ><i className="fa fa-comments-o" /> comments-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/compass"><i
                  className="fa fa-compass"
                /> compass</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/credit-card"><i
                  className="fa fa-credit-card"
                /> credit-card</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/crop"><i
                  className="fa fa-crop"
                /> crop</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/crosshairs"
                ><i className="fa fa-crosshairs" /> crosshairs</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/cube"><i
                  className="fa fa-cube"
                /> cube</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/cubes"><i
                  className="fa fa-cubes"
                /> cubes</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/cutlery"><i
                  className="fa fa-cutlery"
                /> cutlery</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/tachometer"
                ><i className="fa fa-dashboard" /> dashboard <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/database"><i
                  className="fa fa-database"
                /> database</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/desktop"><i
                  className="fa fa-desktop"
                /> desktop</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/dot-circle-o"
                ><i className="fa fa-dot-circle-o" />
                  dot-circle-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/download"><i
                  className="fa fa-download"
                /> download</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/pencil-square-o"
                ><i className="fa fa-edit" /> edit <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/ellipsis-h"
                ><i className="fa fa-ellipsis-h" /> ellipsis-h</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/ellipsis-v"
                ><i className="fa fa-ellipsis-v" /> ellipsis-v</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/envelope"><i
                  className="fa fa-envelope"
                /> envelope</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/envelope-o"
                ><i className="fa fa-envelope-o" /> envelope-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/envelope-square"
                ><i className="fa fa-envelope-square" />
                  envelope-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/eraser"><i
                  className="fa fa-eraser"
                /> eraser</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/exchange"><i
                  className="fa fa-exchange"
                /> exchange</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/exclamation"><i
                  className="fa fa-exclamation"
                /> exclamation</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/exclamation-circle"
                ><i className="fa fa-exclamation-circle" />
                  exclamation-circle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/exclamation-triangle"
                ><i className="fa fa-exclamation-triangle" />
                  exclamation-triangle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/external-link"
                ><i className="fa fa-external-link" />
                  external-link</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/external-link-square"
                ><i className="fa fa-external-link-square" />
                  external-link-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/eye"><i
                  className="fa fa-eye"
                /> eye</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/eye-slash"><i
                  className="fa fa-eye-slash"
                /> eye-slash</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/fax"><i
                  className="fa fa-fax"
                /> fax</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/female"><i
                  className="fa fa-female"
                /> female</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/fighter-jet"><i
                  className="fa fa-fighter-jet"
                /> fighter-jet</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-archive-o"
                ><i className="fa fa-file-archive-o" /> file-archive-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-audio-o"
                ><i className="fa fa-file-audio-o" />
                  file-audio-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file-code-o"><i
                  className="fa fa-file-code-o"
                /> file-code-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-excel-o"
                ><i className="fa fa-file-excel-o" />
                  file-excel-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-image-o"
                ><i className="fa fa-file-image-o" />
                  file-image-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-video-o"
                ><i className="fa fa-file-movie-o" /> file-movie-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-pdf-o"
                ><i className="fa fa-file-pdf-o" /> file-pdf-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-image-o"
                ><i className="fa fa-file-photo-o" /> file-photo-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-image-o"
                ><i className="fa fa-file-picture-o" /> file-picture-o
                  <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-powerpoint-o"
                ><i className="fa fa-file-powerpoint-o" />
                  file-powerpoint-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-audio-o"
                ><i className="fa fa-file-sound-o" /> file-sound-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-video-o"
                ><i className="fa fa-file-video-o" />
                  file-video-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file-word-o"><i
                  className="fa fa-file-word-o"
                /> file-word-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-archive-o"
                ><i className="fa fa-file-zip-o" /> file-zip-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/film"><i
                  className="fa fa-film"
                /> film</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/filter"><i
                  className="fa fa-filter"
                /> filter</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/fire"><i
                  className="fa fa-fire"
                /> fire</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/fire-extinguisher"
                ><i className="fa fa-fire-extinguisher" />
                  fire-extinguisher</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/flag"><i
                  className="fa fa-flag"
                /> flag</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/flag-checkered"
                ><i className="fa fa-flag-checkered" /> flag-checkered</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/flag-o"><i
                  className="fa fa-flag-o"
                /> flag-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bolt"><i
                  className="fa fa-flash"
                /> flash <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/flask"><i
                  className="fa fa-flask"
                /> flask</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/folder"><i
                  className="fa fa-folder"
                /> folder</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/folder-o"><i
                  className="fa fa-folder-o"
                /> folder-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/folder-open"><i
                  className="fa fa-folder-open"
                /> folder-open</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/folder-open-o"
                ><i className="fa fa-folder-open-o" />
                  folder-open-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/frown-o"><i
                  className="fa fa-frown-o"
                /> frown-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/gamepad"><i
                  className="fa fa-gamepad"
                /> gamepad</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/gavel"><i
                  className="fa fa-gavel"
                /> gavel</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/cog"><i
                  className="fa fa-gear"
                /> gear <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/cogs"><i
                  className="fa fa-gears"
                /> gears <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/gift"><i
                  className="fa fa-gift"
                /> gift</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/glass"><i
                  className="fa fa-glass"
                /> glass</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/globe"><i
                  className="fa fa-globe"
                /> globe</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/graduation-cap"
                ><i className="fa fa-graduation-cap" /> graduation-cap</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/users"><i
                  className="fa fa-group"
                /> group <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/hdd-o"><i
                  className="fa fa-hdd-o"
                /> hdd-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/headphones"
                ><i className="fa fa-headphones" /> headphones</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/heart"><i
                  className="fa fa-heart"
                /> heart</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/heart-o"><i
                  className="fa fa-heart-o"
                /> heart-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/history"><i
                  className="fa fa-history"
                /> history</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/home"><i
                  className="fa fa-home"
                /> home</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/picture-o"><i
                  className="fa fa-image"
                /> image <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/inbox"><i
                  className="fa fa-inbox"
                /> inbox</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/info"><i
                  className="fa fa-info"
                /> info</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/info-circle"><i
                  className="fa fa-info-circle"
                /> info-circle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/university"
                ><i className="fa fa-institution" /> institution <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/key"><i
                  className="fa fa-key"
                /> key</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/keyboard-o"
                ><i className="fa fa-keyboard-o" /> keyboard-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/language"><i
                  className="fa fa-language"
                /> language</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/laptop"><i
                  className="fa fa-laptop"
                /> laptop</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/leaf"><i
                  className="fa fa-leaf"
                /> leaf</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/gavel"><i
                  className="fa fa-legal"
                /> legal <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/lemon-o"><i
                  className="fa fa-lemon-o"
                /> lemon-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/level-down"
                ><i className="fa fa-level-down" /> level-down</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/level-up"><i
                  className="fa fa-level-up"
                /> level-up</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/life-ring"><i
                  className="fa fa-life-bouy"
                /> life-bouy <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/life-ring"><i
                  className="fa fa-life-ring"
                /> life-ring</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/life-ring"><i
                  className="fa fa-life-saver"
                /> life-saver <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/lightbulb-o"><i
                  className="fa fa-lightbulb-o"
                /> lightbulb-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/location-arrow"
                ><i className="fa fa-location-arrow" /> location-arrow</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/lock"><i
                  className="fa fa-lock"
                /> lock</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/magic"><i
                  className="fa fa-magic"
                /> magic</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/magnet"><i
                  className="fa fa-magnet"
                /> magnet</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/share"><i
                  className="fa fa-mail-forward"
                /> mail-forward <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/reply"><i
                  className="fa fa-mail-reply"
                /> mail-reply <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/reply-all"><i
                  className="fa fa-mail-reply-all"
                /> mail-reply-all <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/male"><i
                  className="fa fa-male"
                /> male</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/map-marker"
                ><i className="fa fa-map-marker" /> map-marker</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/meh-o"><i
                  className="fa fa-meh-o"
                /> meh-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/microphone"
                ><i className="fa fa-microphone" /> microphone</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/microphone-slash"
                ><i className="fa fa-microphone-slash" />
                  microphone-slash</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/minus"><i
                  className="fa fa-minus"
                /> minus</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/minus-circle"
                ><i className="fa fa-minus-circle" />
                  minus-circle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/minus-square"
                ><i className="fa fa-minus-square" />
                  minus-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/minus-square-o"
                ><i className="fa fa-minus-square-o" /> minus-square-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/mobile"><i
                  className="fa fa-mobile"
                /> mobile</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/mobile"><i
                  className="fa fa-mobile-phone"
                /> mobile-phone <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/money"><i
                  className="fa fa-money"
                /> money</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/moon-o"><i
                  className="fa fa-moon-o"
                /> moon-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/graduation-cap"
                ><i className="fa fa-mortar-board" /> mortar-board
                  <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/music"><i
                  className="fa fa-music"
                /> music</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bars"><i
                  className="fa fa-navicon"
                /> navicon <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/paper-plane"><i
                  className="fa fa-paper-plane"
                /> paper-plane</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/paper-plane-o"
                ><i className="fa fa-paper-plane-o" />
                  paper-plane-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/paw"><i
                  className="fa fa-paw"
                /> paw</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/pencil"><i
                  className="fa fa-pencil"
                /> pencil</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/pencil-square"
                ><i className="fa fa-pencil-square" />
                  pencil-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/pencil-square-o"
                ><i className="fa fa-pencil-square-o" />
                  pencil-square-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/phone"><i
                  className="fa fa-phone"
                /> phone</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/phone-square"
                ><i className="fa fa-phone-square" />
                  phone-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/picture-o"><i
                  className="fa fa-photo"
                /> photo <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/picture-o"><i
                  className="fa fa-picture-o"
                /> picture-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/plane"><i
                  className="fa fa-plane"
                /> plane</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/plus"><i
                  className="fa fa-plus"
                /> plus</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/plus-circle"><i
                  className="fa fa-plus-circle"
                /> plus-circle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/plus-square"><i
                  className="fa fa-plus-square"
                /> plus-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/plus-square-o"
                ><i className="fa fa-plus-square-o" />
                  plus-square-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/power-off"><i
                  className="fa fa-power-off"
                /> power-off</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/print"><i
                  className="fa fa-print"
                /> print</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/puzzle-piece"
                ><i className="fa fa-puzzle-piece" />
                  puzzle-piece</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/qrcode"><i
                  className="fa fa-qrcode"
                /> qrcode</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/question"><i
                  className="fa fa-question"
                /> question</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/question-circle"
                ><i className="fa fa-question-circle" />
                  question-circle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/quote-left"
                ><i className="fa fa-quote-left" /> quote-left</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/quote-right"><i
                  className="fa fa-quote-right"
                /> quote-right</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/random"><i
                  className="fa fa-random"
                /> random</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/recycle"><i
                  className="fa fa-recycle"
                /> recycle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/refresh"><i
                  className="fa fa-refresh"
                /> refresh</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bars"><i
                  className="fa fa-reorder"
                /> reorder <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/reply"><i
                  className="fa fa-reply"
                /> reply</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/reply-all"><i
                  className="fa fa-reply-all"
                /> reply-all</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/retweet"><i
                  className="fa fa-retweet"
                /> retweet</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/road"><i
                  className="fa fa-road"
                /> road</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/rocket"><i
                  className="fa fa-rocket"
                /> rocket</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/rss"><i
                  className="fa fa-rss"
                /> rss</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/rss-square"
                ><i className="fa fa-rss-square" /> rss-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/search"><i
                  className="fa fa-search"
                /> search</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/search-minus"
                ><i className="fa fa-search-minus" />
                  search-minus</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/search-plus"><i
                  className="fa fa-search-plus"
                /> search-plus</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/paper-plane"><i
                  className="fa fa-send"
                /> send <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/paper-plane-o"
                ><i className="fa fa-send-o" /> send-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/share"><i
                  className="fa fa-share"
                /> share</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/share-alt"><i
                  className="fa fa-share-alt"
                /> share-alt</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/share-alt-square"
                ><i className="fa fa-share-alt-square" />
                  share-alt-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/share-square"
                ><i className="fa fa-share-square" />
                  share-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/share-square-o"
                ><i className="fa fa-share-square-o" /> share-square-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/shield"><i
                  className="fa fa-shield"
                /> shield</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/shopping-cart"
                ><i className="fa fa-shopping-cart" />
                  shopping-cart</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/sign-in"><i
                  className="fa fa-sign-in"
                /> sign-in</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/sign-out"><i
                  className="fa fa-sign-out"
                /> sign-out</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/signal"><i
                  className="fa fa-signal"
                /> signal</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/sitemap"><i
                  className="fa fa-sitemap"
                /> sitemap</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/sliders"><i
                  className="fa fa-sliders"
                /> sliders</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/smile-o"><i
                  className="fa fa-smile-o"
                /> smile-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/sort"><i
                  className="fa fa-sort"
                /> sort</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/sort-alpha-asc"
                ><i className="fa fa-sort-alpha-asc" /> sort-alpha-asc</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/sort-alpha-desc"
                ><i className="fa fa-sort-alpha-desc" />
                  sort-alpha-desc</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/sort-amount-asc"
                ><i className="fa fa-sort-amount-asc" />
                  sort-amount-asc</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/sort-amount-desc"
                ><i className="fa fa-sort-amount-desc" />
                  sort-amount-desc</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/sort-asc"><i
                  className="fa fa-sort-asc"
                /> sort-asc</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/sort-desc"><i
                  className="fa fa-sort-desc"
                /> sort-desc</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/sort-desc"><i
                  className="fa fa-sort-down"
                /> sort-down <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/sort-numeric-asc"
                ><i className="fa fa-sort-numeric-asc" />
                  sort-numeric-asc</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/sort-numeric-desc"
                ><i className="fa fa-sort-numeric-desc" />
                  sort-numeric-desc</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/sort-asc"><i
                  className="fa fa-sort-up"
                /> sort-up <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/space-shuttle"
                ><i className="fa fa-space-shuttle" />
                  space-shuttle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/spinner"><i
                  className="fa fa-spinner"
                /> spinner</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/spoon"><i
                  className="fa fa-spoon"
                /> spoon</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/square"><i
                  className="fa fa-square"
                /> square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/square-o"><i
                  className="fa fa-square-o"
                /> square-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/star"><i
                  className="fa fa-star"
                /> star</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/star-half"><i
                  className="fa fa-star-half"
                /> star-half</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/star-half-o"><i
                  className="fa fa-star-half-empty"
                /> star-half-empty <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/star-half-o"><i
                  className="fa fa-star-half-full"
                /> star-half-full <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/star-half-o"><i
                  className="fa fa-star-half-o"
                /> star-half-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/star-o"><i
                  className="fa fa-star-o"
                /> star-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/suitcase"><i
                  className="fa fa-suitcase"
                /> suitcase</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/sun-o"><i
                  className="fa fa-sun-o"
                /> sun-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/life-ring"><i
                  className="fa fa-support"
                /> support <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/tablet"><i
                  className="fa fa-tablet"
                /> tablet</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/tachometer"
                ><i className="fa fa-tachometer" /> tachometer</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/tag"><i
                  className="fa fa-tag"
                /> tag</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/tags"><i
                  className="fa fa-tags"
                /> tags</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/tasks"><i
                  className="fa fa-tasks"
                /> tasks</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/taxi"><i
                  className="fa fa-taxi"
                /> taxi</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/terminal"><i
                  className="fa fa-terminal"
                /> terminal</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/thumb-tack"
                ><i className="fa fa-thumb-tack" /> thumb-tack</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/thumbs-down"><i
                  className="fa fa-thumbs-down"
                /> thumbs-down</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/thumbs-o-down"
                ><i className="fa fa-thumbs-o-down" />
                  thumbs-o-down</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/thumbs-o-up"><i
                  className="fa fa-thumbs-o-up"
                /> thumbs-o-up</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/thumbs-up"><i
                  className="fa fa-thumbs-up"
                /> thumbs-up</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/ticket"><i
                  className="fa fa-ticket"
                /> ticket</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/times"><i
                  className="fa fa-times"
                /> times</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/times-circle"
                ><i className="fa fa-times-circle" />
                  times-circle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/times-circle-o"
                ><i className="fa fa-times-circle-o" /> times-circle-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/tint"><i
                  className="fa fa-tint"
                /> tint</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/caret-square-o-down"
                ><i className="fa fa-toggle-down" /> toggle-down
                  <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/caret-square-o-left"
                ><i className="fa fa-toggle-left" /> toggle-left
                  <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/caret-square-o-right"
                ><i className="fa fa-toggle-right" />
                  toggle-right <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/caret-square-o-up"
                ><i className="fa fa-toggle-up" /> toggle-up <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/trash-o"><i
                  className="fa fa-trash-o"
                /> trash-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/tree"><i
                  className="fa fa-tree"
                /> tree</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/trophy"><i
                  className="fa fa-trophy"
                /> trophy</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/truck"><i
                  className="fa fa-truck"
                /> truck</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/umbrella"><i
                  className="fa fa-umbrella"
                /> umbrella</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/university"
                ><i className="fa fa-university" /> university</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/unlock"><i
                  className="fa fa-unlock"
                /> unlock</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/unlock-alt"
                ><i className="fa fa-unlock-alt" /> unlock-alt</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/sort"><i
                  className="fa fa-unsorted"
                /> unsorted <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/upload"><i
                  className="fa fa-upload"
                /> upload</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/user"><i
                  className="fa fa-user"
                /> user</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/users"><i
                  className="fa fa-users"
                /> users</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/video-camera"
                ><i className="fa fa-video-camera" />
                  video-camera</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/volume-down"><i
                  className="fa fa-volume-down"
                /> volume-down</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/volume-off"
                ><i className="fa fa-volume-off" /> volume-off</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/volume-up"><i
                  className="fa fa-volume-up"
                /> volume-up</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/exclamation-triangle"
                ><i className="fa fa-warning" /> warning <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/wheelchair"
                ><i className="fa fa-wheelchair" /> wheelchair</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/wrench"><i
                  className="fa fa-wrench"
                /> wrench</a></Col>

              </Row>
            </div>
          </TabPane>

          {/* tab #5 */}
          <TabPane tabId="5">
            <div>
              <Row className="icon-list">
                <Col  lg={3} xs={12} className="icon-list-item"><a
                  href="../icon/align-center"
                ><i className="fa fa-align-center" />
                  align-center</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a
                  href="../icon/align-justify"
                ><i className="fa fa-align-justify" />
                  align-justify</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a
                  href="../icon/align-left"
                ><i className="fa fa-align-left" /> align-left</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/align-right"><i
                  className="fa fa-align-right"
                /> align-right</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/bold"><i
                  className="fa fa-bold"
                /> bold</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/link"><i
                  className="fa fa-chain"
                /> chain <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a
                  href="../icon/chain-broken"
                ><i className="fa fa-chain-broken" />
                  chain-broken</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/clipboard"><i
                  className="fa fa-clipboard"
                /> clipboard</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/columns"><i
                  className="fa fa-columns"
                /> columns</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/files-o"><i
                  className="fa fa-copy"
                /> copy <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/scissors"><i
                  className="fa fa-cut"
                /> cut <span className="text-muted">(alias)</span></a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/outdent"><i
                  className="fa fa-dedent"
                /> dedent <span className="text-muted">(alias)</span></a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/eraser"><i
                  className="fa fa-eraser"
                /> eraser</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/file"><i
                  className="fa fa-file"
                /> file</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/file-o"><i
                  className="fa fa-file-o"
                /> file-o</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/file-text"><i
                  className="fa fa-file-text"
                /> file-text</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/file-text-o"><i
                  className="fa fa-file-text-o"
                /> file-text-o</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/files-o"><i
                  className="fa fa-files-o"
                /> files-o</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/floppy-o"><i
                  className="fa fa-floppy-o"
                /> floppy-o</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/font"><i
                  className="fa fa-font"
                /> font</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/header"><i
                  className="fa fa-header"
                /> header</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/indent"><i
                  className="fa fa-indent"
                /> indent</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/italic"><i
                  className="fa fa-italic"
                /> italic</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/link"><i
                  className="fa fa-link"
                /> link</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/list"><i
                  className="fa fa-list"
                /> list</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/list-alt"><i
                  className="fa fa-list-alt"
                /> list-alt</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/list-ol"><i
                  className="fa fa-list-ol"
                /> list-ol</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/list-ul"><i
                  className="fa fa-list-ul"
                /> list-ul</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/outdent"><i
                  className="fa fa-outdent"
                /> outdent</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/paperclip"><i
                  className="fa fa-paperclip"
                /> paperclip</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/paragraph"><i
                  className="fa fa-paragraph"
                /> paragraph</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/clipboard"><i
                  className="fa fa-paste"
                /> paste <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/repeat"><i
                  className="fa fa-repeat"
                /> repeat</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/undo"><i
                  className="fa fa-rotate-left"
                /> rotate-left <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/repeat"><i
                  className="fa fa-rotate-right"
                /> rotate-right <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/floppy-o"><i
                  className="fa fa-save"
                /> save <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/scissors"><i
                  className="fa fa-scissors"
                /> scissors</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a
                  href="../icon/strikethrough"
                ><i className="fa fa-strikethrough" />
                  strikethrough</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/subscript"><i
                  className="fa fa-subscript"
                /> subscript</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/superscript"><i
                  className="fa fa-superscript"
                /> superscript</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/table"><i
                  className="fa fa-table"
                /> table</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/text-height"><i
                  className="fa fa-text-height"
                /> text-height</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a
                  href="../icon/text-width"
                ><i className="fa fa-text-width" /> text-width</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/th"><i
                  className="fa fa-th"
                /> th</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/th-large"><i
                  className="fa fa-th-large"
                /> th-large</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/th-list"><i
                  className="fa fa-th-list"
                /> th-list</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/underline"><i
                  className="fa fa-underline"
                /> underline</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a href="../icon/undo"><i
                  className="fa fa-undo"
                /> undo</a></Col>

                <Col  lg={3} xs={12} className="icon-list-item"><a
                  href="../icon/chain-broken"
                ><i className="fa fa-unlink" /> unlink <span
                  className="text-muted"
                >(alias)</span></a></Col>
              </Row>
            </div>
          </TabPane>

          {/* tab #6 */}
          <TabPane tabId="6">
            <div>
              <Row className="icon-list">
                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/adn"><i
                  className="fa fa-adn"
                /> adn</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/android"><i
                  className="fa fa-android"
                /> android</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/apple"><i
                  className="fa fa-apple"
                /> apple</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/behance"><i
                  className="fa fa-behance"
                /> behance</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/behance-square"
                ><i className="fa fa-behance-square" /> behance-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/bitbucket"><i
                  className="fa fa-bitbucket"
                /> bitbucket</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/bitbucket-square"
                ><i className="fa fa-bitbucket-square" />
                  bitbucket-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/btc"><i
                  className="fa fa-bitcoin"
                /> bitcoin <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/btc"><i
                  className="fa fa-btc"
                /> btc</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/codepen"><i
                  className="fa fa-codepen"
                /> codepen</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/css3"><i
                  className="fa fa-css3"
                /> css3</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/delicious"><i
                  className="fa fa-delicious"
                /> delicious</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/deviantart"
                ><i className="fa fa-deviantart" /> deviantart</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/digg"><i
                  className="fa fa-digg"
                /> digg</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/dribbble"><i
                  className="fa fa-dribbble"
                /> dribbble</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/dropbox"><i
                  className="fa fa-dropbox"
                /> dropbox</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/drupal"><i
                  className="fa fa-drupal"
                /> drupal</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/empire"><i
                  className="fa fa-empire"
                /> empire</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/facebook"><i
                  className="fa fa-facebook"
                /> facebook</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/facebook-square"
                ><i className="fa fa-facebook-square" />
                  facebook-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/flickr"><i
                  className="fa fa-flickr"
                /> flickr</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/foursquare"
                ><i className="fa fa-foursquare" /> foursquare</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/empire"><i
                  className="fa fa-ge"
                /> ge <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/git"><i
                  className="fa fa-git"
                /> git</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/git-square"
                ><i className="fa fa-git-square" /> git-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/github"><i
                  className="fa fa-github"
                /> github</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/github-alt"
                ><i className="fa fa-github-alt" /> github-alt</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/github-square"
                ><i className="fa fa-github-square" />
                  github-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/gittip"><i
                  className="fa fa-gittip"
                /> gittip</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/google"><i
                  className="fa fa-google"
                /> google</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/google-plus"><i
                  className="fa fa-google-plus"
                /> google-plus</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/google-plus-square"
                ><i className="fa fa-google-plus-square" />
                  google-plus-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/hacker-news"><i
                  className="fa fa-hacker-news"
                /> hacker-news</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/html5"><i
                  className="fa fa-html5"
                /> html5</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/instagram"><i
                  className="fa fa-instagram"
                /> instagram</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/joomla"><i
                  className="fa fa-joomla"
                /> joomla</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/jsfiddle"><i
                  className="fa fa-jsfiddle"
                /> jsfiddle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/linkedin"><i
                  className="fa fa-linkedin"
                /> linkedin</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/linkedin-square"
                ><i className="fa fa-linkedin-square" />
                  linkedin-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/linux"><i
                  className="fa fa-linux"
                /> linux</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/maxcdn"><i
                  className="fa fa-maxcdn"
                /> maxcdn</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/openid"><i
                  className="fa fa-openid"
                /> openid</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/pagelines"><i
                  className="fa fa-pagelines"
                /> pagelines</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/pied-piper"
                ><i className="fa fa-pied-piper" /> pied-piper</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/pied-piper-alt"
                ><i className="fa fa-pied-piper-alt" /> pied-piper-alt</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/pied-piper"
                ><i className="fa fa-pied-piper-square" />
                  pied-piper-square <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/pinterest"><i
                  className="fa fa-pinterest"
                /> pinterest</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/pinterest-square"
                ><i className="fa fa-pinterest-square" />
                  pinterest-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/qq"><i
                  className="fa fa-qq"
                /> qq</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/rebel"><i
                  className="fa fa-ra"
                /> ra <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/rebel"><i
                  className="fa fa-rebel"
                /> rebel</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/reddit"><i
                  className="fa fa-reddit"
                /> reddit</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/reddit-square"
                ><i className="fa fa-reddit-square" />
                  reddit-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/renren"><i
                  className="fa fa-renren"
                /> renren</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/share-alt"><i
                  className="fa fa-share-alt"
                /> share-alt</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/share-alt-square"
                ><i className="fa fa-share-alt-square" />
                  share-alt-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/skype"><i
                  className="fa fa-skype"
                /> skype</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/slack"><i
                  className="fa fa-slack"
                /> slack</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/soundcloud"
                ><i className="fa fa-soundcloud" /> soundcloud</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/spotify"><i
                  className="fa fa-spotify"
                /> spotify</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/stack-exchange"
                ><i className="fa fa-stack-exchange" /> stack-exchange</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/stack-overflow"
                ><i className="fa fa-stack-overflow" /> stack-overflow</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/steam"><i
                  className="fa fa-steam"
                /> steam</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/steam-square"
                ><i className="fa fa-steam-square" />
                  steam-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/stumbleupon"><i
                  className="fa fa-stumbleupon"
                /> stumbleupon</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/stumbleupon-circle"
                ><i className="fa fa-stumbleupon-circle" />
                  stumbleupon-circle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/tencent-weibo"
                ><i className="fa fa-tencent-weibo" />
                  tencent-weibo</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/trello"><i
                  className="fa fa-trello"
                /> trello</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/tumblr"><i
                  className="fa fa-tumblr"
                /> tumblr</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/tumblr-square"
                ><i className="fa fa-tumblr-square" />
                  tumblr-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/twitter"><i
                  className="fa fa-twitter"
                /> twitter</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/twitter-square"
                ><i className="fa fa-twitter-square" /> twitter-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/vimeo-square"
                ><i className="fa fa-vimeo-square" />
                  vimeo-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/vine"><i
                  className="fa fa-vine"
                /> vine</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/vk"><i
                  className="fa fa-vk"
                /> vk</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/weixin"><i
                  className="fa fa-wechat"
                /> wechat <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/weibo"><i
                  className="fa fa-weibo"
                /> weibo</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/weixin"><i
                  className="fa fa-weixin"
                /> weixin</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/windows"><i
                  className="fa fa-windows"
                /> windows</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/wordpress"><i
                  className="fa fa-wordpress"
                /> wordpress</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/xing"><i
                  className="fa fa-xing"
                /> xing</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/xing-square"><i
                  className="fa fa-xing-square"
                /> xing-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/yahoo"><i
                  className="fa fa-yahoo"
                /> yahoo</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/youtube"><i
                  className="fa fa-youtube"
                /> youtube</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/youtube-play"
                ><i className="fa fa-youtube-play" />
                  youtube-play</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/youtube-square"
                ><i className="fa fa-youtube-square" /> youtube-square</a></Col>
              </Row>
            </div>
          </TabPane>

          {/* tab #7 */}
          <TabPane tabId="7">
            <div>
              <h4>File Type <span className="fw-semi-bold">Icons</span></h4>
              <Row className="icon-list">
                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file"><i
                  className="fa fa-file"
                /> file</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-archive-o"
                ><i className="fa fa-file-archive-o" /> file-archive-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-audio-o"
                ><i className="fa fa-file-audio-o" />
                  file-audio-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file-code-o"><i
                  className="fa fa-file-code-o"
                /> file-code-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-excel-o"
                ><i className="fa fa-file-excel-o" />
                  file-excel-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-image-o"
                ><i className="fa fa-file-image-o" />
                  file-image-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-video-o"
                ><i className="fa fa-file-movie-o" /> file-movie-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file-o"><i
                  className="fa fa-file-o"
                /> file-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-pdf-o"
                ><i className="fa fa-file-pdf-o" /> file-pdf-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-image-o"
                ><i className="fa fa-file-photo-o" /> file-photo-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-image-o"
                ><i className="fa fa-file-picture-o" /> file-picture-o
                  <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-powerpoint-o"
                ><i className="fa fa-file-powerpoint-o" />
                  file-powerpoint-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-audio-o"
                ><i className="fa fa-file-sound-o" /> file-sound-o <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file-text"><i
                  className="fa fa-file-text"
                /> file-text</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file-text-o"><i
                  className="fa fa-file-text-o"
                /> file-text-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-video-o"
                ><i className="fa fa-file-video-o" />
                  file-video-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/file-word-o"><i
                  className="fa fa-file-word-o"
                /> file-word-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/file-archive-o"
                ><i className="fa fa-file-zip-o" /> file-zip-o <span
                  className="text-muted"
                >(alias)</span></a></Col>
              </Row>

              <h4>Form Control <span className="fw-semi-bold">Icons</span></h4>
              <Row className="icon-list">
                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/check-square"
                ><i className="fa fa-check-square" />
                  check-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/check-square-o"
                ><i className="fa fa-check-square-o" /> check-square-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/circle"><i
                  className="fa fa-circle"
                /> circle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/circle-o"><i
                  className="fa fa-circle-o"
                /> circle-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/dot-circle-o"
                ><i className="fa fa-dot-circle-o" />
                  dot-circle-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/minus-square"
                ><i className="fa fa-minus-square" />
                  minus-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/minus-square-o"
                ><i className="fa fa-minus-square-o" /> minus-square-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/plus-square"><i
                  className="fa fa-plus-square"
                /> plus-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/plus-square-o"
                ><i className="fa fa-plus-square-o" />
                  plus-square-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/square"><i
                  className="fa fa-square"
                /> square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/square-o"><i
                  className="fa fa-square-o"
                /> square-o</a></Col>
              </Row>

              <h4>Currency <span className="fw-semi-bold">Icons</span></h4>
              <Row className="icon-list">
                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/btc"><i
                  className="fa fa-bitcoin"
                /> bitcoin <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/btc"><i
                  className="fa fa-btc"
                /> btc</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/jpy"><i
                  className="fa fa-cny"
                /> cny <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/usd"><i
                  className="fa fa-dollar"
                /> dollar <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/eur"><i
                  className="fa fa-eur"
                /> eur</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/eur"><i
                  className="fa fa-euro"
                /> euro <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/gbp"><i
                  className="fa fa-gbp"
                /> gbp</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/inr"><i
                  className="fa fa-inr"
                /> inr</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/jpy"><i
                  className="fa fa-jpy"
                /> jpy</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/krw"><i
                  className="fa fa-krw"
                /> krw</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/money"><i
                  className="fa fa-money"
                /> money</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/jpy"><i
                  className="fa fa-rmb"
                /> rmb <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/rub"><i
                  className="fa fa-rouble"
                /> rouble <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/rub"><i
                  className="fa fa-rub"
                /> rub</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/rub"><i
                  className="fa fa-ruble"
                /> ruble <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/inr"><i
                  className="fa fa-rupee"
                /> rupee <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/try"><i
                  className="fa fa-try"
                /> try</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/try"><i
                  className="fa fa-turkish-lira"
                /> turkish-lira <span
                  className="text-muted"
                >(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/usd"><i
                  className="fa fa-usd"
                /> usd</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/krw"><i
                  className="fa fa-won"
                /> won <span className="text-muted">(alias)</span></a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/jpy"><i
                  className="fa fa-yen"
                /> yen <span className="text-muted">(alias)</span></a></Col>
              </Row>

              <h4>Video Player <span className="fw-semi-bold">Icons</span></h4>
              <Row className="icon-list">

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/arrows-alt"
                ><i className="fa fa-arrows-alt" /> arrows-alt</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/backward"><i
                  className="fa fa-backward"
                /> backward</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/compress"><i
                  className="fa fa-compress"
                /> compress</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/eject"><i
                  className="fa fa-eject"
                /> eject</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/expand"><i
                  className="fa fa-expand"
                /> expand</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/fast-backward"
                ><i className="fa fa-fast-backward" />
                  fast-backward</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/fast-forward"
                ><i className="fa fa-fast-forward" />
                  fast-forward</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/forward"><i
                  className="fa fa-forward"
                /> forward</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/pause"><i
                  className="fa fa-pause"
                /> pause</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/play"><i
                  className="fa fa-play"
                /> play</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/play-circle"><i
                  className="fa fa-play-circle"
                /> play-circle</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/play-circle-o"
                ><i className="fa fa-play-circle-o" />
                  play-circle-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/step-backward"
                ><i className="fa fa-step-backward" />
                  step-backward</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/step-forward"
                ><i className="fa fa-step-forward" />
                  step-forward</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/stop"><i
                  className="fa fa-stop"
                /> stop</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/youtube-play"
                ><i className="fa fa-youtube-play" />
                  youtube-play</a></Col>
              </Row>

              <h4>Medical <span className="fw-semi-bold">Icons</span></h4>
              <Row className="icon-list">
                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/ambulance"><i
                  className="fa fa-ambulance"
                /> ambulance</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/h-square"><i
                  className="fa fa-h-square"
                /> h-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/hospital-o"
                ><i className="fa fa-hospital-o" /> hospital-o</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/medkit"><i
                  className="fa fa-medkit"
                /> medkit</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/plus-square"><i
                  className="fa fa-plus-square"
                /> plus-square</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/stethoscope"><i
                  className="fa fa-stethoscope"
                /> stethoscope</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a href="../icon/user-md"><i
                  className="fa fa-user-md"
                /> user-md</a></Col>

                <Col className="icon-list-item" lg={3}  xs={12}><a
                  href="../icon/wheelchair"
                ><i className="fa fa-wheelchair" /> wheelchair</a></Col>
              </Row>

            </div>
          </TabPane>

          {/* tab #8 */}

          <TabPane tabId="8">
            <div>
              <h4>File Type <span className="fw-semi-bold">Icons</span></h4>
              <Row>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-add" /> add
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-add-1" /> add-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-add-2" /> add-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-add-3" /> add-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-agenda" /> agenda
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-alarm" /> alarm
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-alarm-1" /> alarm-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-alarm-clock" /> alarm-clock
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-alarm-clock-1" /> alarm-clock-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-albums" /> albums
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-app" /> app
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-archive" /> archive
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-archive-1" /> archive-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-archive-2" /> archive-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-archive-3" /> archive-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-attachment" /> attachment
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-back" /> back
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-battery" /> battery
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-battery-1" /> battery-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-battery-2" /> battery-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-battery-3" /> battery-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-battery-4" /> battery-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-battery-5" /> battery-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-battery-6" /> battery-6
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-battery-7" /> battery-7
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-battery-8" /> battery-8
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-battery-9" /> battery-9
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-binoculars" /> binoculars
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-blueprint" /> blueprint
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-bluetooth" /> bluetooth
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-bluetooth-1" /> bluetooth-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-bookmark" /> bookmark
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-bookmark-1" /> bookmark-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-briefcase" /> briefcase
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-broken-link" /> broken-link
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-calculator" /> calculator
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-calculator-1" /> calculator-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-calendar" /> calendar
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-calendar-1" /> calendar-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-calendar-2" /> calendar-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-calendar-3" /> calendar-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-calendar-4" /> calendar-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-calendar-5" /> calendar-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-calendar-6" /> calendar-6
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-calendar-7" /> calendar-7
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-checked" /> checked
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-checked-1" /> checked-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-clock" /> clock
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-clock-1" /> clock-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-close" /> close
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-cloud" /> cloud
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-cloud-computing" /> cloud-computing
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-cloud-computing-1" /> cloud-computing-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-cloud-computing-2" /> cloud-computing-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-cloud-computing-3" /> cloud-computing-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-cloud-computing-4" /> cloud-computing-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-cloud-computing-5" /> cloud-computing-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-command" /> command
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-compact-disc" /> compact-disc
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-compact-disc-1" /> compact-disc-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-compact-disc-2" /> compact-disc-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-compass" /> compass
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-compose" /> compose
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-controls" /> controls
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-controls-1" /> controls-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-controls-2" /> controls-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-controls-3" /> controls-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-controls-4" /> controls-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-controls-5" /> controls-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-controls-6" /> controls-6
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-controls-7" /> controls-7
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-controls-8" /> controls-8
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-controls-9" /> controls-9
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-database" /> database
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-database-1" /> database-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-database-2" /> database-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-database-3" /> database-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-diamond" /> diamond
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-diploma" /> diploma
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-dislike" /> dislike
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-dislike-1" /> dislike-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-divide" /> divide
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-divide-1" /> divide-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-division" /> division
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-document" /> document
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-download" /> download
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-edit" /> edit
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-edit-1" /> edit-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-eject" /> eject
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-eject-1" /> eject-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-equal" /> equal
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-equal-1" /> equal-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-equal-2" /> equal-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-error" /> error
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-exit" /> exit
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-exit-1" /> exit-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-exit-2" /> exit-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-eyeglasses" /> eyeglasses
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-fast-forward" /> fast-forward
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-fast-forward-1" /> fast-forward-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-fax" /> fax
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-file" /> file
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-file-1" /> file-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-file-2" /> file-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-film" /> film
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-fingerprint" /> fingerprint
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-flag" /> flag
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-flag-1" /> flag-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-flag-2" /> flag-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-flag-3" /> flag-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-flag-4" /> flag-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-focus" /> focus
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder" /> folder
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-1" /> folder-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-10" /> folder-10
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-11" /> folder-11
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-12" /> folder-12
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-13" /> folder-13
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-14" /> folder-14
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-15" /> folder-15
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-16" /> folder-16
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-17" /> folder-17
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-18" /> folder-18
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-19" /> folder-19
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-2" /> folder-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-3" /> folder-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-4" /> folder-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-5" /> folder-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-6" /> folder-6
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-7" /> folder-7
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-8" /> folder-8
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-folder-9" /> folder-9
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-forbidden" /> forbidden
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-funnel" /> funnel
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-garbage" /> garbage
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-garbage-1" /> garbage-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-garbage-2" /> garbage-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-gift" /> gift
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-help" /> help
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-hide" /> hide
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-hold" /> hold
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-home" /> home
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-home-1" /> home-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-home-2" /> home-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-hourglass" /> hourglass
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-hourglass-1" /> hourglass-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-hourglass-2" /> hourglass-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-hourglass-3" /> hourglass-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-house" /> house
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-id-card" /> id-card
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-id-card-1" /> id-card-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-id-card-2" /> id-card-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-id-card-3" /> id-card-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-id-card-4" /> id-card-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-id-card-5" /> id-card-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-idea" /> idea
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-incoming" /> incoming
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-infinity" /> infinity
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-info" /> info
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-internet" /> internet
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-key" /> key
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-lamp" /> lamp
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-layers" /> layers
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-layers-1" /> layers-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-like" /> like
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-like-1" /> like-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-like-2" /> like-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-link" /> link
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-list" /> list
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-list-1" /> list-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-lock" /> lock
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-lock-1" /> lock-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-locked" /> locked
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-locked-1" /> locked-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-locked-2" /> locked-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-locked-3" /> locked-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-locked-4" /> locked-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-locked-5" /> locked-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-locked-6" /> locked-6
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-login" /> login
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-magic-wand" /> magic-wand
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-magnet" /> magnet
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-magnet-1" /> magnet-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-magnet-2" /> magnet-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-map" /> map
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-map-1" /> map-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-map-2" /> map-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-map-location" /> map-location
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-megaphone" /> megaphone
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-megaphone-1" /> megaphone-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-menu" /> menu
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-menu-1" /> menu-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-menu-2" /> menu-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-menu-3" /> menu-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-menu-4" /> menu-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-microphone" /> microphone
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-microphone-1" /> microphone-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-minus" /> minus
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-minus-1" /> minus-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-more" /> more
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-more-1" /> more-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-more-2" /> more-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-multiply" /> multiply
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-multiply-1" /> multiply-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-music-player" /> music-player
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-music-player-1" /> music-player-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-music-player-2" /> music-player-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-music-player-3" /> music-player-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-mute" /> mute
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-muted" /> muted
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-navigation" /> navigation
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-navigation-1" /> navigation-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-network" /> network
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-newspaper" /> newspaper
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-next" /> next
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-note" /> note
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-notebook" /> notebook
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-notebook-1" /> notebook-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-notebook-2" /> notebook-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-notebook-3" /> notebook-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-notebook-4" /> notebook-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-notebook-5" /> notebook-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-notepad" /> notepad
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-notepad-1" /> notepad-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-notepad-2" /> notepad-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-notification" /> notification
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-paper-plane" /> paper-plane
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-paper-plane-1" /> paper-plane-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-pause" /> pause
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-pause-1" /> pause-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-percent" /> percent
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-percent-1" /> percent-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-perspective" /> perspective
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-photo-camera" /> photo-camera
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-photo-camera-1" /> photo-camera-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-photos" /> photos
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-picture" /> picture
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-picture-1" /> picture-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-picture-2" /> picture-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-pin" /> pin
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-placeholder" /> placeholder
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-placeholder-1" /> placeholder-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-placeholder-2" /> placeholder-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-placeholder-3" /> placeholder-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-placeholders" /> placeholders
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-play-button" /> play-button
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-play-button-1" /> play-button-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-plus" /> plus
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-power" /> power
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-previous" /> previous
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-price-tag" /> price-tag
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-print" /> print
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-push-pin" /> push-pin
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-radar" /> radar
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-reading" /> reading
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-record" /> record
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-repeat" /> repeat
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-repeat-1" /> repeat-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-restart" /> restart
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-resume" /> resume
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-rewind" /> rewind
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-rewind-1" /> rewind-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-route" /> route
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-save" /> save
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-search" /> search
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-search-1" /> search-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-send" /> send
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-server" /> server
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-server-1" /> server-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-server-2" /> server-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-server-3" /> server-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-settings" /> settings
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-settings-1" /> settings-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-settings-2" /> settings-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-settings-3" /> settings-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-settings-4" /> settings-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-settings-5" /> settings-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-settings-6" /> settings-6
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-settings-7" /> settings-7
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-settings-8" /> settings-8
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-settings-9" /> settings-9
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-share" /> share
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-share-1" /> share-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-share-2" /> share-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-shuffle" /> shuffle
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-shuffle-1" /> shuffle-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-shutdown" /> shutdown
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-sign" /> sign
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-sign-1" /> sign-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-skip" /> skip
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-smartphone" /> smartphone
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-smartphone-1" /> smartphone-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-smartphone-10" /> smartphone-10
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-smartphone-11" /> smartphone-11
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-smartphone-2" /> smartphone-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-smartphone-3" /> smartphone-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-smartphone-4" /> smartphone-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-smartphone-5" /> smartphone-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-smartphone-6" /> smartphone-6
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-smartphone-7" /> smartphone-7
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-smartphone-8" /> smartphone-8
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-smartphone-9" /> smartphone-9
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-speaker" /> speaker
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-speaker-1" /> speaker-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-speaker-2" /> speaker-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-speaker-3" /> speaker-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-speaker-4" /> speaker-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-speaker-5" /> speaker-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-speaker-6" /> speaker-6
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-speaker-7" /> speaker-7
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-speaker-8" /> speaker-8
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-spotlight" /> spotlight
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-star" /> star
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-star-1" /> star-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-stop" /> stop
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-stop-1" /> stop-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-stopwatch" /> stopwatch
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-stopwatch-1" /> stopwatch-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-stopwatch-2" /> stopwatch-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-stopwatch-3" /> stopwatch-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-stopwatch-4" /> stopwatch-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-street" /> street
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-street-1" /> street-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-substract" /> substract
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-substract-1" /> substract-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-success" /> success
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-switch" /> switch
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-switch-1" /> switch-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-switch-2" /> switch-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-switch-3" /> switch-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-switch-4" /> switch-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-switch-5" /> switch-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-switch-6" /> switch-6
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-switch-7" /> switch-7
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-tabs" /> tabs
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-tabs-1" /> tabs-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-target" /> target
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-television" /> television
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-television-1" /> television-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-time" /> time
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-trash" /> trash
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-umbrella" /> umbrella
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-unlink" /> unlink
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-unlocked" /> unlocked
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-unlocked-1" /> unlocked-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-unlocked-2" /> unlocked-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-upload" /> upload
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-user" /> user
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-user-1" /> user-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-user-2" /> user-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-user-3" /> user-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-user-4" /> user-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-user-5" /> user-5
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-user-6" /> user-6
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-user-7" /> user-7
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-users" /> users
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-users-1" /> users-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-video-camera" /> video-camera
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-video-camera-1" /> video-camera-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-video-player" /> video-player
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-video-player-1" /> video-player-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-video-player-2" /> video-player-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-view" /> view
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-view-1" /> view-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-view-2" /> view-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-volume-control" /> volume-control
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-volume-control-1" /> volume-control-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-warning" /> warning
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-wifi" /> wifi
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-wifi-1" /> wifi-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-windows" /> windows
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-windows-1" /> windows-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-windows-2" /> windows-2
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-windows-3" /> windows-3
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-windows-4" /> windows-4
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-wireless-internet" /> wireless-internet
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-worldwide" /> worldwide
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-worldwide-1" /> worldwide-1
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-zoom-in" /> zoom-in
                </Col>
                <Col className="icon-list-item" lg={3}  xs={12}>
                  <i className="fi flaticon-zoom-out" /> zoom-out
                </Col>
              </Row>
            </div>
          </TabPane>
        </TabContent>
        <Footer/>
      </section>
    );
  }
}

export default Icons;
