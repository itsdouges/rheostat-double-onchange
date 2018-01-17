import React, { Component } from "react";
import Rheostat from "rheostat";
import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";
import "./App.css";

class App extends Component {
  state = {
    values: [20, 50],
    value: ""
  };

  updateSlider = ({ values }, context = "from rheostat") => {
    console.log("slider was updated!", context);

    this.setState({
      values: values
    });
  };

  updateTextbox = (value, context = "from input") => {
    console.log("textbox was updated!", context);

    this.setState({
      value
    });
  };

  render() {
    return (
      <div className="App">
        <button
          style={{ marginBottom: "5em" }}
          onClick={() => this.updateSlider({ values: [10, 90] }, "from button")}
        >
          fix slider values
        </button>

        <Rheostat
          onChange={this.updateSlider}
          max={100}
          values={this.state.values}
        />

        <div>
          <button
            style={{ marginBottom: "5em" }}
            onClick={() => this.updateTextbox("hello, world!", "from button")}
          >
            fix textbox value
          </button>

          <input
            onChange={e => this.updateTextbox(e.target.value)}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default App;
