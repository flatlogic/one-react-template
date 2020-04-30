import React, { PureComponent } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

import Widget from '../../../components/Widget';
import echartsData from './mock';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/component/polar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

import './Echarts.scss';

class Echarts extends PureComponent {
  
  state = {
    ed: echartsData,
    initOptions: {
      renderer: 'canvas'
    }
  }

  render() {

    const { ed, initOptions } = this.state;

    return (
      <div>
        <h1 className="page-title">Visual - <span className="fw-semi-bold">Echarts</span></h1>
        <p>For more information please read full <a href="https://ecomfe.github.io/vue-echarts/">documentation</a></p>
        <Row>
          <Col lg={{size: 10, offset: 1}} xs={12}>
            <Widget
              title={<h5>Echarts <span className="fw-semi-bold">Bar Chart</span></h5>}
              close collapse
            >
              <ReactEchartsCore
                echarts={echarts}
                option={ed.bar}
                opts={initOptions}
              />
            </Widget>
          </Col>
          <Col lg={6} xs={12}>
            <Widget
              title={<h5>Echarts <span className="fw-semi-bold">Pie Chart</span></h5>}
              close collapse
            >
              <ReactEchartsCore
                echarts={echarts}
                option={ed.pie}
                opts={initOptions}
              />
            </Widget>
          </Col>
          <Col lg={6} xs={12}>
            <Widget
              title={<h5>Echarts <span className="fw-semi-bold">Polar Chart</span></h5>}
              close collapse
            >
              <ReactEchartsCore
                echarts={echarts}
                option={ed.polar}
                opts={initOptions}
              />
            </Widget>
          </Col>
          <Col lg={12} xs={12}>
          <Widget
            title={<h5>Echarts <span className="fw-semi-bold">Line Chart</span></h5>}
            close collapse
          >
            <ReactEchartsCore
              echarts={echarts}
              option={ed.line}
              opts={initOptions}
            />
          </Widget>
          </Col>
          <Col lg={6} xs={12}>
          <Widget
            title={<h5>Echarts <span className="fw-semi-bold">Scatter Chart</span></h5>}
            close collapse
          >
            <ReactEchartsCore
              echarts={echarts}
              option={ed.scatter}
              opts={initOptions}
            />
          </Widget>
          </Col>
          <Col lg={6} xs={12}>
          <Widget
            title={<h5>Echarts <span className="fw-semi-bold">Gauge Chart</span></h5>}
            close collapse
          >
            <ReactEchartsCore
              echarts={echarts}
              option={ed.gauge}
              opts={initOptions}
            />
          </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Echarts;
