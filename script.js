Highcharts.chart('container', {

    title: {
        text: '日韓越馬四國來台觀光人數變化',
        align: 'left'
    },

    subtitle: {
        text: '年度:2015-2024',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '人次'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2015 to 2024'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2015
        }
    },

    series: [{
        name: '亞洲地區 (Asia)',
        data: [
            3766249, 4488396, 5144314, 5484556, 6068826, 
            893803, 81883, 638464, 3971251, 4765615
        ]
    }, {
        name: '日本 (Japan)',
        data: [
            1629193, 1896456, 1895546, 1966303, 2162426, 
            268798, 9910, 87133, 926140, 1318372
        ]
    }, {
        name: '韓國 (Korea)',
        data: [
            662670, 887412, 1055207, 1021530, 1245144, 
            179190, 3165, 51480, 745885, 1010035
        ]
    }, {
        name: '越南 (Vietnam)',
        data: [
            143930, 194323, 380833, 490699, 404570, 
            110053, 24872, 135356, 382026, 370802
        ]
    }, {
        name: '馬來西亞 (Malaysia)',
        data: [
            458401, 500496, 552620, 548947, 560099, 
            74788, 6188, 60742, 463292, 463216
        ]
    }, {
        name: '總計 (Total)',
        data: [
            2894194, 3478687, 3884206, 4027479, 4372239, 
            632829, 44135, 334711, 2517343, 3162425
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});