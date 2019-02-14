import React from "react";
import { Scatter } from "react-chartjs-2";

// plot({
//     x: regression.bHistory,
//     y: regression.mseHistory.reverse(),
//     xLabel: "Value of B",
//     yLabel: "Mean Square Error"
//   });

class Chart1 extends React.Component {
  plotData = this.props.data;

  data = {
    labels: ["Scatter"],
    datasets: [
      {
        label: "My First dataset",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.4)",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#111",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [
          { x: 65, y: 75 },
          { x: 59, y: 49 },
          { x: 80, y: 90 },
          { x: 81, y: 29 },
          { x: 56, y: 36 },
          { x: 55, y: 25 },
          { x: 40, y: 18 }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="card-panel col s4">
        <h5>Input Data</h5>
        <Scatter data={this.data} />
      </div>
    );
  }
}

export default Chart1;
