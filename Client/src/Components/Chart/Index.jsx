import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const BarChart = ({ data }) => {
    const myTheme = {
        "text": {
            "fontSize": 14,
            "fill": "#B5B5B5",
            "outlineWidth": 0,
            
        },
        axis: {
          legend: {
            text: {
              fill: '#B5B5B5', 
              fontSize: 16,
            },
          },
        },
       
      };
  return (
    <div style={{ height: '300px',  width:'100%'}}>
      <ResponsiveBar
        data={data}
        keys={['Completion']}
        indexBy="Day"
        enableTotals={true}
        borderRadius='4px'
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        layout="vertical" 
        enableGridY={false}
        enableLabel={false} 
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors='#5A92CB' 
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Day', 
          legendPosition: 'middle',
          legendOffset: 36,
          
        }}
        theme={myTheme}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Completion Percentage', 
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default BarChart;
