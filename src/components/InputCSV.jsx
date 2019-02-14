import React from "react";
import Papa from "papaparse";
import { Subscribe } from "unstated";
import { DataContainer } from "../containers/DataContainer";

class InputCSV extends React.Component {
  renderLoading = () => {
    let progress = this.props.DataContainer.state.loadingProgress + "%";
    switch (this.props.DataContainer.state.loadingStage) {
      case 1:
        return (
          <div className="progress">
            <div className="determinate" style={{ width: progress }} />
          </div>
        );
      case 2:
        return (
          <button className="btn">
            <span>&#10003;</span>
          </button>
        );
      case 3:
        return (
          <button className="btn">
            <span>&#9747;</span>
          </button>
        );
      default:
        return (
          <button
            onClick={this.props.DataContainer.importCSV}
            className="btn"
            disabled={!this.props.DataContainer.state.csvfile}
          >
            Upload now!
          </button>
        );
    }
  };

  render() {
    return (
      <Subscribe to={[DataContainer]}>
        {csvData => (
          <div
            className=" card-panel col s4"
            style={{
              padding: "1rem",
              margin: "1rem"
            }}
          >
            <h4>Import CSV File!</h4>
            <input
              type="file"
              name="file"
              placeholder={null}
              onChange={csvData.handleChange}
            />
            <p>{csvData.state.loadingProgress}</p>
            {this.renderLoading()}
          </div>
        )}
      </Subscribe>
    );
  }
}
export default InputCSV;
