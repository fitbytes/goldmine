import plotly from 'plotly.js/dist/plotly';
import createPlotComponent from 'react-plotly.js/factory';

const Plot = createPlotComponent(plotly);

export default function DynamicPlot () {

 return  (
  <Plot
    data={[
      {

       values: [19, 26, 55],
       labels: ['var1', 'var2', 'var3'],
       type: 'pie'

       // type: 'scatter',
        //mode: 'lines+points',
        //x: [1, 2, 3],
        //y: [2, 6, 3],
        //marker: {color: 'red'}
      },
      {
        //type: 'bar',
        //x: [1, 2, 3],
        //y: [2, 5, 3]
      }
    ]}

    layout={{
      width: 500,
      height: 500,
      title: 'A Fancy Plot'
    }}
  />
)

} 