var app = new Vue({
  el: '#app',
  data: {
    isShow:true,
    content: '',
  },
  methods:{
    search:function(){
      this.isShow=true
      axios.get('http://49.234.43.59:18903/api/v0/movies/acted_in_by/'+this.content).then(res=>{
        console.log(res.data)

        var category=[{name:'person'},{name:'film'},{name:'actors'}]
        
        if (res.data.length!=0) {
          //生成节点datalist
          //插入第一级节点
          var datalist=[{name:this.content,category:0}]
          //插入第二级节点
          for (let index = 0; index < res.data.length; index++) {
            const element = res.data[index].title;
            datalist.push({name:element,category:1})
          }
          //插入第三级节点
          for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < res.data[i].actors.length; j++) {
              const element = res.data[i].actors[j].person.name;
              //如果节点不重复，才可以插入
              var temp=false
              for (let index = 0; index < datalist.length; index++) {
                if (datalist[index].name==element) {
                  temp=true
                  break
                }
              }
              if (!temp) {
                datalist.push({name:element,category:2})
              }
            }
          }
          console.log(datalist)

          //生成关系连线linkslist
          var linkslist=[]
          //插入第一层关系
          for (let i = 0; i < res.data.length; i++) {
            linkslist.push({
              source: this.content,
              target: res.data[i].title,
              label: {
                  show: true,
                  formatter:'acted'
              }
            })
          }
          //插入第二层关系
          for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < res.data[i].actors.length; j++) {
              linkslist.push({
                source: res.data[i].actors[j].person.name,
                target: res.data[i].title,
                label: {
                    show: true,
                    formatter:'acted'
                }
              })
            }
          }
          console.log(linkslist)
        }

        //echarts展现关系图，这里需要分到另一个js！！
        if (res.data.length!=0) {
          var dom = document.getElementById("graph");
          var myChart = echarts.init(dom);
          var categories=category
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
                      edgeSymbolSize: [4, 7],
                      // edgeLabel: {
                      //     fontSize: 20
                      // },
                      data:datalist,
                      links:linkslist,
                      lineStyle: {
                          opacity: 0.9,
                          width: 2,
                          curveness: 0
                      }
                  }
              ]
          }
          myChart.setOption(option, true)
        }
      })
    }
  }
})