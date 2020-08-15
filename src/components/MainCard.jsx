import React from 'react'
import ReactHighcharts from 'react-highcharts'

export default function MainCard({ data }) {
    return (
        <div className="col-md-6 my-2" >
            <div className="card main-card">
                <div className="card-body">
                    <div>Cost Per {data.name}</div>
                    <ReactHighcharts config={{
                        chart: {
                            type: 'area',
                            animation: false,
                            height: 200
                        },
                        title: {
                            text: ''
                        },
                        subtitle: {
                            text: ''
                        },
                        xAxis: {
                            categories: data.cvi.map(cvi => cvi.date),
                            tickmarkPlacement: 'on',
                            title: {
                                enabled: false
                            }
                        },
                        yAxis: {
                            title: {
                                text: ''
                            },
                            labels: {
                                formatter: function () {
                                    return "$" + (this.value/2);
                                }
                            }
                        },
                        tooltip: {
                            split: true,
                            valuePrefix: '$'
                        },
                        plotOptions: {
                            area: {
                                stacking: 'normal',
                                lineColor: '#666666',
                                lineWidth: 1,
                                marker: {
                                    lineWidth: 1,
                                    lineColor: '#666666'
                                }
                            },
                            series: {
                                animation: false,
                            }
                        },
                        series: [
                            {
                                name: 'Cost Per Lead',
                                data: data.cvi.map(cvi => cvi.cost)
                            },
                            {
                                name: 'Net Income Per Lead',
                                data: data.cvi.map(cvi => cvi.income)
                            },
                        ]
                    }} />
                    <div className="main-card-bottom">
                        <span>Total {data.total}%</span>
                        <span>vs last Month: {data.lastMonth}%</span>
                        <span>to Target: {data.target}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
