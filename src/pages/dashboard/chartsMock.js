import config from './config';

const colors = config.app.colors;
const {inverse, info, primary, danger, warning, success} = colors;

let columnColors = [inverse, primary, info, success, warning, danger, '#EC2A00', '#FF8C22'];

export const chartData = {
    apex: {
        column: {
            series: [{
                data: [300, 280, 280, 230, 190, 270, 290, 230, 260, 290, 300, 250, 270],
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: false
                    },
                },
                colors: columnColors,
                plotOptions: {
                    bar: {
                        columnWidth: '30%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: false,
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                },
                yaxis: {
                    show: false,
                    labels: {
                        show: false
                    },
                },
                grid: {
                    padding: {
                        left: 0,
                        right: 0
                    },
                    xaxis: {
                        lines: {
                            show: false,
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
            },
        },
        pie: {
            series: [25, 2, 15],
            options: {
                chart: {
                    type: 'donut'
                },
                colors: [warning, "#323232", danger],
                labels: ["On progress", "Canceled", "Booked"],
                stroke: {
                    show: false,
                    width: 0
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '45%'
                        }
                    }
                },
                legend: {
                    show: false
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        }
    },
};
