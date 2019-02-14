import React from "react";
import trainTestSplit from "../analyses/trainTestSplit";
import LinearRegression from "../analyses/linear-regression";

class Analysis extends React.Component {
  state = { prediction: [], expected: [] };

  trainModel = () => {
    this.setState({ prediction: [], expected: [] });
    let data = this.props.data;

    let { features, labels, testFeatures, testLabels } = trainTestSplit(data, {
      featureColumns: ["horsepower"],
      labelColumns: ["mpg"],
      shuffle: true,
      splitTest: 50
    });
    const regression = new LinearRegression(features, labels, {
      learningRate: 0.1,
      iterations: 100
    });
    regression.train();
    // const r2 = regression.test(testFeatures, testLabels);
    // console.log("R2= ", r2);
    // console.log(regression.bHistory);
  };

  // testModel = () => {
  //   const r2 = regression.test(testFeatures, testLabels);
  //   console.log("R2= ", r2);
  //   console.log(regression.bHistory);
  // };

  renderTable() {
    const rows = this.state.prediction.map((row, i) => {
      return (
        <tr key={i}>
          <td>{row}</td>
          <td>{this.state.expected[i]}</td>
          <td>
            {((this.state.expected[i] - row) * 100) / this.state.expected[i]}
          </td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Prediction</th>
            <th>Expected</th>
            <th>Error(%)</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div
        className="card-panel col s4"
        style={{
          padding: "1rem",
          margin: "1rem"
        }}
      >
        <h5>Analysis</h5>
        <p>Data length= {this.props.data.length}</p>
        <button
          onClick={this.trainModel}
          disabled={this.props.data.length <= 0}
          className="btn waves-effect waves-light"
        >
          Train Model
          <i className="material-icons right">play_arrow</i>
        </button>
        <button
          onClick={this.testModel}
          disabled={this.props.data.length <= 0}
          className="btn waves-effect waves-light"
        >
          Test Model
          <i className="material-icons right">play_arrow</i>
        </button>
        {this.state.prediction.length > 0 && this.renderTable()}
      </div>
    );
  }
}

export default Analysis;
