import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';
import { PyramidData } from '../../data/dummy';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pyramid" title="Pyramid" />
      <AccumulationChartComponent
        id="line-chart"
        height="420px"
        // primaryXAxis={FinancialPrimaryXAxis}
        // primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection]} />
        <AccumulationSeriesCollectionDirective>
          {PyramidData.map((item, index) => <AccumulationSeriesDirective key={index} {...item} dataSource={PyramidData} xName="x" yName="y" text="text" type="Pyramid" />)}
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;
