# Data visualisation library realize by Echarts-Eibon-Zhong
cs732-se75-assignment-Eibon-Zhong created by GitHub Classroom

## Introduction
This is a frontend project about how can we use the data visualisation library, Echarts to provise developers a much more easy way of creating charts on there web pages.


## [Echarts](https://echarts.apache.org/en/index.html)
ECharts is a declarative framework for rapid construction of web-based visualization. It is a powerful, interactive charting and data visualization library for browsers, 
developed by Apache Software Foundation.

It provides various types of charts, such as line, bar, scatter, pie, and more, with so many options and animations. It is designed to make data visualization easy and
efficient for developers.

## Tools we used
1. Bootstrap  2. jQuery   3. Echarts

Firstly, I used the framework of Bootstrap to make a frontend demo page to accommodate these charts.

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





