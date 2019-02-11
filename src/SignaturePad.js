import React from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default class SignaturePad extends React.Component {

  sigCanvas = null;

  updatePointGroup = () => {
    if (this.sigCanvas) {
      this.props.onChange(this.sigCanvas);
    }
  }

  render() {

    return (
      <div style={{
          border: "1px solid rgb(128,128,128)", 
          width: 500, 
          margin: "auto",
          marginTop: 20,
        }}>
        <SignatureCanvas 
          ref={(ref) => { this.sigCanvas = ref }}
          onEnd={this.updatePointGroup}
          penColor='green'
          canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />      
      </div>
    );
  }
};
