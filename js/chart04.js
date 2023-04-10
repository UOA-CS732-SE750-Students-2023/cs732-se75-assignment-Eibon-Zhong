var chart04 = echarts.init($('#chart04')[0]).setOption({
  title:{
    text:"Area of the counties(10000km^3)",
    subtext:'',
    left:'center'
  },

  visualMap:{
    min: 0,
    max:1000000,
    text:['High','Low'],
    realtime:false,
    calculat:true,
    color:['#56baf8','#87cefa','#b8e2fc']
  },

  series:[
    {
      name:'Area of the counties(10000km^3)',
      type:'map',
      mapType:'world',
      roam:true,
      itemStyle:{
        emphasis:{lable:{show:true}}
      },


      data:[
                {name: 'Canada', value: 998.467},

                {name: 'China', value: 960},

                {name: 'United Kingdom', value: 24.41},

                {name: 'New Zealand', value: 26.8},

                {name: 'Russia', value: 1710},

                {name: 'United States of America', value: 937},


      ]
    }
  ]
});