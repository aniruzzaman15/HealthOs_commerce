import { BarChartContainer } from "./barChart";
import DonutChartContainer from "./donutChart";

function Graph() {
  return (
    <div className="flex p-4 w-full flex-wrap">
      <div className="w-[25%]">
        <div className="percentage-container">
          <span className="percentage-number">94</span>
          <span className="percentage-sign">%</span>
          <p>Customer Satisfaction</p>
        </div>
        <div className="percentage-container">
          <span className="percentage-number">89</span>
          <span className="percentage-sign">%</span>
          <p>Monthly Sales</p>
        </div>
      </div>
      <div className="w-[75%] flex gap-4">
        <div className="w-1/2 ">
          <DonutChartContainer />
        </div>
        <div className="w-1/2">
          <BarChartContainer />
        </div>
      </div>
    </div>
  );
}

export default Graph;
