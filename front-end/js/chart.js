var dom = document.getElementById("graph");
var myChart = echarts.init(dom);
// var categories=[{name:'actor'},{name:'film'}]
var categories=[]
option = {
    title: {
        text: 'movie star'
    },
    tooltip: {},
    legend:[{
        data: categories.map(function (a) {
            return a.name;
        })
    }],
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'force',
            force:{
                repulsion: 5000,
                // edgeLength:[10,500]
            },
            symbolSize: 50,
            roam: true,
            label: {
                show: true
            },
            categories:categories,
            edgeSymbol: ['none', 'arrow'],
            // edgeSymbolSize: [4, 10],
            // edgeLabel: {
            //     fontSize: 20
            // },
            data:[],
            // data: [{
            //     name: 'Tom Hanks',
            //     category:0,
            // }, {
            //     name: 'Liv Tyler',
            //     category:0,
            // }, {
            //     name: 'That Thing You Do',
            //     category:1,
            // }],
            links:[],
            // links: [{
            //     source: 'Liv Tyler',
            //     target: 'That Thing You Do',
            //     // symbolSize: [5, 20],
            //     label: {
            //         show: true,
            //         formatter:'acted'
            //     },
            //     lineStyle: {
            //         // width: 5,
            //         curveness: 0.0
            //     }
            // }, {
            //     source: 2,
            //     target: 0,
            //     label: {
            //         show: true,
            //         formatter:'acted'
            //     },
            //     lineStyle: {
            //         curveness: 0.0
            //     }
            // }],
            lineStyle: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    ]
}
myChart.setOption(option, true)