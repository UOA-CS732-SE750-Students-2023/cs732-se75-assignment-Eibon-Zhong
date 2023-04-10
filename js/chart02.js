var chart02Dom = $('#chart02')[0];
var chart02 = echarts.init(chart02Dom,'walden');
var option_c02 = {
  title:{
    text:'Rainfall pre month of the year(mm)',
    subtext:'Country : China',
    left:'center'
  },

  xAxis:{
    type:'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']
  },

  yAxis:{
    type:'value'
  },

  series:[
    {
      data: [2.8,4.4, 9.9, 23.7, 37.6, 70.5, 159.6, 139.4,48.7,23.9,9.6,2],
      type:'bar'
    }
  ]

};
chart02.setOption(option_c02);