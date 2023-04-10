# Data visualisation library realize by Echarts-Eibon-Zhong
cs732-se75-assignment-Eibon-Zhong created by GitHub Classroom

## Introduction
This is a frontend project about how can we use the data visualisation library, Echarts to provise developers a much more easy way of creating charts on there web pages.


## [Echarts](https://echarts.apache.org/en/index.html)
ECharts is a declarative framework for rapid construction of web-based visualization. It is a powerful, interactive charting and data visualization library for browsers developed by Apache Software Foundation.

It provides various types of charts, such as line, bar, scatter, pie, and more, with so many options and animations. It is designed to make data visualization easy and
efficient for developers.

[Getting strat](https://echarts.apache.org/handbook/en/get-started/)
[setOption Method](https://echarts.apache.org/en/option.html#title)
[Features of Echarts](https://echarts.apache.org/en/feature.html)


## Tools we used
1. Bootstrap  2. jQuery   3. Echarts

Firstly, I used the framework of Bootstrap to make a HTML and  frontend demo page to accommodate these charts.

Chart01 is a pie chart.

Chart02 is a bar chart.

Chart03 is a scatter plot with a prediction.

Chart04 is a map chart.

Chart05 is a Funnel chart.

## Explaination to each chart

### Chart01-Pie chart
Firstly, we should register the external data converter. Let’s creating a chart object. Here is a jQuery selector. The div tag of index.html whose id is chart01 will 
be connected to this chart.

```
var chart01Dom = $('#chart01')[0];
var chart01 = echarts.init(chart01Dom,'walden');
```


To design this chart, firstly we should give a title to this chart.
```
var option_c01 = {
    title: {
      text: 'Where the students came from',
      subtext: 'Course COMPSCI732',
      left: 'center'
    },
```

Then we need to put data into this chart which should be wrote in series.
```
series: [
      {
        name: 'Access From',
        type: 'pie',
        //It can control the size of the chart
        radius: '50%',
```
Input data
```
 data: [
          { value: 30, name: 'China' },
          { value: 30, name: 'India' },
          { value: 4, name: 'New Zealand' },
          { value: 3, name: 'U.S.A' },
          { value: 2, name: 'Egypt' },
          { value: 1, name: 'U.K.' }
        ],
```

To add some shadow effects. We can add an emphasis into series.
```
emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
```

And to make these data shown in the chart, let’s add a tooltip and a legend。
```
 tooltip: {
      //When the trigger is 'item' only the data for that point is displayed, when it is 'axis' the data for all axes under that column is displayed
      trigger: 'item'
    },
legend: {
      orient: 'vertical',
      left: 'left'
    },
```


### Chart02-Bar chart
Firstly, just as what we have done in chart 1, we  initialize an echarts instance and we still have the setoption method
```
var chart02Dom = $('#chart02')[0];
var chart02 = echarts.init(chart02Dom,'walden');
var option_c02 = {}
```
Set a title
```
 title: {
      text: 'Rainfall per month of the year(mm)',
      subtext: 'Country: China',
      left: 'center'
    },
```

In our chart02 the x-axis will be months and y-axis will be the amount of precipitation.
```
xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']
  },
  yAxis: {
    type: 'value'
  },
```
Then we put our data into chart:
```
series: [
    {
      data: [2.8,4.4, 9.9, 23.7, 37.6, 70.5, 159.6, 139.4,48.7,23.9,9.6,2],
      type: 'bar'
    }
```

### Chart03-scatter plot
In this chart, we do not set the data in the series this time, but set the data in the dataset, so that the data can be separated from other configurations and 
easy to manage.
```
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
        }
```

Next, we use `transform` configuration represents the data of this dataset, from the result of this transform, we set the form of data transformation to regression, which can predict the development of the data. So it should be like:
```
 transform: {
          type: 'ecStat:regression',
          config: { method: 'polynomial', order: 3 }
```

After the data is processed, we set the style of the chart, specify the title, tooltip, x-axis and y-axis for it.
```
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
```
Finally, in the series, the first set of data is presented in the form of scatter points, the second set of predicted data is displayed in the style of a smooth curve, and the style and label of the graph are set, and the data is mapped to the label and tooltip through encode

### Chart04-Map
Next is chart4. In this chart we want to draw a map to show the Area of different countries.
First, as before, set the chart's title information.
```
 title:{
    text:"Area of the counties(10000km^3)",
    subtext:'',
    left:'center'
  },
```

Then use the visualMap component. which dimension of the data does it define to map to what visual element. Here we specify the maximum 1 million and minimum value of
0 to the visual map and define the color list of the graphic map.
```
visualMap:{
    min: 0,
    max:1000000,
    text:['High','Low'],
    realtime:false,
    calculat:true,
    color:['#56baf8','#87cefa','#b8e2fc']
  },
```
Finally, we set the type as a world map in the series, set the style of the mouse highlight through emphasis, and finally import the data we prepared in data.
```
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
```
