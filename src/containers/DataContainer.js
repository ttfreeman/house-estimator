import { Container } from "unstated";
import Papa from "papaparse";

class DataContainer extends Container {
  state = {
    csvfile: undefined,
    loadingStage: 0,
    loadingProgress: 0,
    csvData: []
  };

  addData = val => {
    const csvData = [...this.state.csvData];
    csvData.push(val);
    this.setState({ csvData });
  };

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0],
      loadingStage: 0
    });
  };

  importCSV = () => {
    this.setState({ loadingStage: 1 });
    const { csvfile } = this.state;
    const streamData = [];
    Papa.parse(csvfile, {
      complete: result => {
        this.setState({ loadingStage: 2 });
      },
      error: error => {
        console.log(error.message);
        this.setState({ loadingStage: 3 });
      },
      header: false,
      skipEmptyLines: true,
      dynamicTyping: true,
      step: row => {
        streamData.push(row.data[0]);
        this.setState({
          loadingProgress: (row.meta.cursor / csvfile.size) * 100
        });
        this.addData(streamData);
      }
    });
  };
}

export { DataContainer };
