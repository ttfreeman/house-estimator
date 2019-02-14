import React, { Component } from "react";
import { Subscribe } from "unstated";
import InputCSV from "./components/InputCSV";
import Analysis from "./components/Analysis";
import Header from "./components/Header";
import Chart1 from "./components/Chart1";
import { DataContainer } from "./containers/DataContainer";

class App extends Component {
  render() {
    return (
      <Subscribe to={[DataContainer]}>
        {dataStore => (
          <div>
            <Header />
            <div className="container">
              <div className="row">
                <InputCSV DataContainer={dataStore} />
                <Chart1 DataContainer={dataStore} />
                {/* <Analysis DataContainer={dataStore} /> */}
              </div>
            </div>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default App;
