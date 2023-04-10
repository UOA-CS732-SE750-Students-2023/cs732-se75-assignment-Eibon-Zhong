echarts.registerTransform(ecStat.transform.regression);


  var chart03 = echarts.init($('#chart03')[0],'walden').setOption(
    {
      
      dataset: [
        {
          source: [
            [1,2.8],
            [2,4.4],
            [3,9.9],
            [4,23.7],
            [5,37.6],
            [6,70.5],
            [7,159.6],
            [8,139.4],
            [9,48.7],
            [10,23.9],
            [11,9.6],
            [12,2],
            
          ]
        },

        
        {
          transform: {
          type: 'ecStat:regression',
          config: { method: 'polynomial', order: 3 }
        }
        }

        

      ],


      title: {
        text: 'Rainfall per month of the year(mm)',
        subtext: 'China',
        left: 'center'
      },


      tooltip: {
       
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      

     
      xAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },

      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },




      series: [
        {
          name: 'scatter',
          type: 'scatter',
          datasetIndex: 0
        },

        
       // It is for predict
        {
          name: 'line',
          type: 'line',
          smooth: true,
          datasetIndex: 1,
          symbolSize: 0.1,
          symbol: 'circle',
          label: { show: true, fontSize: 16 },
          labelLayout: { dx: -20 },
          encode: { label: 2, tooltip: 1 }
        }

        
      ]
    }

  );