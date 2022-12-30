import React from "react";

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from "@progress/kendo-react-charts";
import "@progress/kendo-theme-material/dist/all.css";
import { donutChartData } from '../../../lib/data';

const labelTemplate = e => e.category + "\n" + e.value + "%";

function DonutChartContainer () {
    return (
        <Chart style={{ height: 300 }}>
          <ChartSeries>
            <ChartSeriesItem
              type="donut"
              data={donutChartData}
              categoryField="foodType"
              field="percentSold"
              padding={0}
            >
              <ChartSeriesLabels
                color="#fff"
                background="none"
                content={labelTemplate}
              />
            </ChartSeriesItem>
          </ChartSeries>
          <ChartLegend visible={false} />
        </Chart>
      );
}
export default DonutChartContainer