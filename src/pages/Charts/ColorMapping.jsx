import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend } from '@syncfusion/ej2-react-charts';

import { rangeColorMapping, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Color" title="Color" />
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[ColumnSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {rangeColorMapping.map((item, index) => (
            <SeriesDirective key={index} dataSource={item.data} xName="x" yName="y" type="Column" name={item.label} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default ColorMapping;
