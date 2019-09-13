import React from 'react'
import QrReader from 'react-qr-scanner'
import ReactPlayer from 'react-player'

const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>
 
export default class extends React.Component {
    constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      pass:0
    }
 
    this.handleScan = this.handleScan.bind(this)
    this.openImageDialog = this.openImageDialog.bind(this)
    this.onVideoFinish = this.onVideoFinish.bind(this)
    this.nextStep = this.nextStep.bind(this)

  }
  handleScan(data){
    this.setState({
      result: data,
      pass:1
    })
  }

  openImageDialog() {
    this.refs.qrcode.openImageDialog()
  }

  onVideoFinish() {
    this.setState({
        pass:2
      })
  }

  nextStep(){
    this.props.onFinish();
  }

  handleError(err){
    alert(err)
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }
 
    return(
      <div>
          {this.state.pass === 0 &&
            <div className='qr-code'>
              <QrReader
                ref="qrcode"
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                legacyMode={true}
                maxImageSize={0}
                facingMode={'rear'} />
              </div>
          }
          
          {this.state.pass === 0 &&
            <input type="button" value="Submit QR Code" onClick={this.openImageDialog} />
          }      
              
          {this.state.pass === 1 &&
              <ReactPlayer
                  className='react-player'
                  url={this.state.result}
                  width='100%'
                  height='100%'
                  onEnded={this.onVideoFinish} />
          }

          {this.state.pass === 1 &&
            <div className='player-wrapper'>
              {this.state.result}
             </div>
          }
          
          {this.state.pass === 2 &&
            <p><Gray> &gt;</Gray>  Vá para o 12 andar</p>
          }

          {this.state.pass === 2 &&
            <input type="button" value="Ir para proximo andar" onClick={this.nextStep} />
          }
      </div>
    )
  }
}



