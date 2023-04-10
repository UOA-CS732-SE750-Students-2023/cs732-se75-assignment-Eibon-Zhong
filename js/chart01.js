var chart01Dom = $('#chart01')[0];
var chart01 = echarts.init(chart01Dom,'walden');
var option_c01 = {
  title:{
    text:'Where are the students came from',
    subtext:'Course COMPSCI 732',
    left:'center'
  },

  tooltip:{
    trigger:'item'
  },
  legend:{
    orient:'vertical',
    left:'left'
  },


  series:[
    {
      name: 'Access From',
      type:'pie',
      radius:'50%',

      data: [
        { value: 30, name: 'China' },
        { value: 30, name: 'India' },
        { value: 4, name: 'New Zealand' },
        { value: 3, name: 'U.S.A' },
        { value: 2, name: 'Egypt' },
        { value: 1, name: 'U.K.' }
      ],

      enphasis:{
        itemStyle:{
          shadowBlur:10,
          shadowOffsetX:5,
          shadowColor:'rgba(0,0,0,0.5)'
        }
      }

    }
  ]
}

chart01.setOption(option_c01);