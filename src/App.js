import React, { Component } from 'react';
import SignatureCanvas from "./SignaturePad";
import './App.css';

class App extends Component {

  state = {
    pointGroup: [],
  }

  onSignatureChange = (sigCanvas) => {
    if (sigCanvas) {
      const pointGroup = sigCanvas.toData();
      this.setState({pointGroup});
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.pointGroup);
  }

  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>
        <div>
          <h3>Sign Off here</h3>
          <SignatureCanvas onChange={this.onSignatureChange} />
        </div>
        <button 
          disabled={this.state.pointGroup.length === 0}
          style={{
            display: "inline-block", 
            padding: ".5rem 1rem", 
            marginTop: 5,
            borderRadius: 3 }}>Complete</button>
      </form>
    );
  }
}

export default App;
