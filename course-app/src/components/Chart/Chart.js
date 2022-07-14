import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";
// we should make Chart more flexible, actually not restricted to months and 12 data points, we can say
//when Chart comp is being used somewhere in our app, we want to receive data points that should be plotted as props
//so Chart comp is fairly configurable, and that components that use Chart comp can decide how many data points with which
//values will be rendered

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //izvlaci samo vrednosti i smesta u niz
  const totalMaximum = Math.max(...dataPointValues); // trazi max vrednost da odredi visinu charta
  console.log(dataPointValues);
  console.log(totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum} // posle koristi taj value da izracuna %
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
//1.I expect props.dataPoint prop that is array, and I want for every value inside the array to render a <Chart Bar/>
//2. I want to pass some data to a <ChartBar /> to control how it will be rendered
//3. Every dataPoint element mush be an object with value proprety because we expect that, because that's how we wanna use it
//4. I want to make sure that every ChartBar plots the value in relation to max value in the entire chart
// so I was maxValue={null}
export default Chart;
