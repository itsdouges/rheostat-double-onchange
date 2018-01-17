import React, { Component } from "react";
import Rheostat from "rheostat";
import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";
import "./App.css";

class App extends Component {
  state = {
    values: [20, 50]
  };

  updateValues = ({ values }, context = "from rheostat") => {
    console.log("i was updated!", context);

    this.setState({
      values: values
    });
  };

  render() {
    return (
      <div className="App">
        <button
          style={{ marginBottom: "5em" }}
          onClick={() => this.updateValues({ values: [10, 90] }, "from button")}
        >
          fix values
        </button>

        <Rheostat
          onChange={this.updateValues}
          max={100}
          values={this.state.values}
        />
      </div>
    );
  }
}

export default App;
