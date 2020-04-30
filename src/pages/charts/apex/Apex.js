import React, { Component } from 'react';
import { 
  Col, 
  Row, 
} from 'reactstrap';
import ApexChart from 'react-apexcharts';
import './ApexChart.module.scss';
import Widget from '../../../components/Widget';
import chartsData from './mock';

class ApexCharts extends Component {

  state = {
    cd: chartsData
  }
 
  render() {

    const { cd } = this.state;

    return (
      <div>
        <h1 className="page-title">Visual - <span className="fw-semi-bold">Apex Charts</span></h1>
        <p>For more information please read full <a href="https://apexcharts.com/docs/vue-charts/">documentation</a></p>
        <Row>
          <Col xl={6} lg={6} xs={12}>
            <Widget
              title={<h5>Apex <span className="fw-semi-bold">Line Chart</span></h5>}
              close collapse
            >
              <ApexChart 
                className="sparkline-chart"
                type={"line"}
                series={cd.line.series}
                options={cd.line.options}
              />
            </Widget>
          </Col>
          <Col xl={6} lg={6} xs={12}>
            <Widget
              title={<h5>Apex <span className="fw-semi-bold">Area Chart</span></h5>}
              close collapse
            >
              <ApexChart 
                className="sparkline-chart"
                type={"area"}
                series={cd.area.series}
                options={cd.area.options}
              />
            </Widget>
          </Col>
          <Col xl={6} lg={6} xs={12}>
            <Widget
              title={<h5>Apex <span className="fw-semi-bold">Column Chart</span></h5>}
              close collapse
            >
              <ApexChart  
                className="sparkline-chart"
                type={"bar"}
                series={cd.column.series}
                options={cd.column.options}
              />
            </Widget>
          </Col>
          <Col xl={6} lg={6} xs={12}>
            <Widget
              title={<h5>Apex <span className="fw-semi-bold">Bar Chart</span></h5>}
              close collapse
            >
              <ApexChart 
                className="sparkline-chart"
                type={"bar"}
                series={cd.bar.series}
                options={cd.bar.options}
              />
            </Widget>
          </Col>
          <Col xl={12} lg={12} xs={12}>
            <Widget
              title={<h5>Apex <span className="fw-semi-bold">Mixed Chart</span></h5>}
              close collapse
            >
              <ApexChart
                className="sparkline-chart"
                type={"line"}
                height={350}
                series={cd.mixed.series}
                options={cd.mixed.options}
              />
            </Widget>
          </Col>
          <Col lg={6} xs={12}>
            <Row>
              <Col lg={6} xs={12}>
                <Widget
                  title={<h5>Apex <span className="fw-semi-bold">Pie Chart</span></h5>}
                  close collapse
                >
                  <ApexChart 
                    className="sparkline-chart"
                    type={"pie"}
                    height={175}
                    series={cd.pie.series}
                    options={cd.pie.options}
                  />
                </Widget>
              </Col>
              <Col lg={6} xs={12}>
                <Widget
                  title={<h5>Apex <span className="fw-semi-bold">Donut Chart</span></h5>}
                  close collapse
                >
                  <ApexChart 
                    className="sparkline-chart"
                    type={"donut"}
                    height={175}
                    series={cd.donut.series}
                    options={cd.donut.options}
                  />
                </Widget>
              </Col>
              <Col lg={12} xs={12}>
                <Widget
                  title={<h5>Apex <span className="fw-semi-bold">Heat Map Chart</span></h5>}
                  close collapse
                >
                  <ApexChart 
                    className="sparkline-chart"
                    type={"heatmap"}
                    height={250}
                    series={cd.heatmap.series}
                    options={cd.heatmap.options}
                  />
                </Widget>
              </Col>
            </Row>
          </Col>
          <Col lg={6} xs={12}>
          <Widget
            title={<h5>Apex <span className="fw-semi-bold">Radial Chart</span></h5>}
            close collapse
          >
            <ApexChart 
              className="sparkline-chart"
              type={"radialBar"}
              series={cd.radial.series}
              options={cd.radial.options}
            />
          </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ApexCharts;
