import React from 'react';

import {
  Row, Col
} from 'reactstrap';

import Widget from '../../components/Widget';
import ApexChart from 'react-apexcharts';

import s from './Charts.module.scss';
import {chartData} from './mock';

import ReactEchartsCore from 'echarts-for-react/lib/core';
 
import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/themeRiver';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

class Charts extends React.Component {

  state = {
    cd: chartData,
    initEchartsOptions: {
      renderer: 'canvas'
    },

  }

  render() {
    const { cd, initEchartsOptions } = this.state
    return (
      <div className={s.root}>
        <div>
          <Row>
            <Col lg={7} xs={12}>
              <Widget
                title={<p style={{ fontWeight: 700 }}>Apex</p>}
                customDropDown
              >
                <ApexChart 
                  className="sparkline-chart"
                  height={350} 
                  series={cd.apex.column.series}
                  options={cd.apex.column.options}
                  type={"bar"}
                />
              </Widget>
            </Col>
            <Col lg={5} xs={12}>
              <Widget
                title={<p style={{ fontWeight: 700 }}>Echarts Line Chart</p>}
                customDropDown
              >
                <ReactEchartsCore
                  echarts={echarts}
                  option={cd.echarts.line}
                  opts={initEchartsOptions}
                  style={{height: "365px"}}
                />
              </Widget>
            </Col>
            <Col lg={12} xs={12}>
              <Row>
                <Col lg={6} xs={12}>
                  <Widget
                    title={<p style={{ fontWeight: 700 }}>Apex <span className="fw-semi-bold">Monochrome Pie</span></p>}
                    customDropDown
                  >
                    <ApexChart 
                      className="sparkline-chart"
                      type={"pie"} 
                      height={200} 
                      series={cd.apex.pie.series}
                      options={cd.apex.pie.options}
                    />
                  </Widget>
                </Col>
                <Col lg={6} xs={12}>
                  <Widget
                    title={<p style={{ fontWeight: 700 }}>Chart <span className="fw-semi-bold">Donut Chart</span></p>}
                    customDropDown
                  >
                    <ReactEchartsCore
                      echarts={echarts}
                      option={cd.echarts.donut}
                      opts={initEchartsOptions}
                      style={{height: "170px"}}
                    />
                  </Widget>
                </Col>
              </Row>
            </Col>
            <Col lg={12} xs={12}>
              <Widget
                title={<p style={{ fontWeight: 700 }}>Echarts <span className="fw-semi-bold">River Chart</span></p>}
                customDropDown
              >
                <ReactEchartsCore
                  echarts={echarts}
                  option={cd.echarts.river}
                  opts={initEchartsOptions}
                  style={{height: "350px"}}
                />
              </Widget>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default Charts;
