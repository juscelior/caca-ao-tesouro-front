import React from 'react'
import QrReader from 'react-qr-scanner'
import ReactPlayer from 'react-player'

const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

export default class extends React.Component {
    constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: null,
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
      <div className="main-content">
                            <div className="item"
                                style={{
                                    whiteSpace: 'pre',
                                    fontFamily: 'Menlo-Regular, Menlo, monospace',
                                    fontSize: 35,
                                    lineHeight: '55px',
                                    color: 'white',
                                    textAlign: 'center'
                                }}>

<h1>Instruções</h1>
                                        <ol style={{textAlign: 'left'}}>
                                        <li>Vá para o {this.props.dest}</li>
                                        <li>Encontre o QR</li>
                                        <li>Assista o vídeo até o final</li>
<li>Descubra o próximo desafio!</li>

                                        </ol>                        
            
                        


                            </div>
        

          {this.state.pass === 0 &&
            <div className='qr-code'>
              <QrReader
                ref="qrcode"
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                legacyMode={true}
                className="qrcode"
                facingMode={'rear'} />
            </div>
          }
          
          {this.state.pass === 0 &&
            <div className="item button-hand" style={{height:'55vh'}}>
              <button onClick={this.openImageDialog}>Ler QR Code
                <div className="hands"></div>
              </button>            
            </div>
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
            <div className="item button-parrot" >
              <button onClick={this.nextStep}>Próximo
                <div className="parrot"></div>
                <div className="parrot"></div>
                <div className="parrot"></div>
                <div className="parrot"></div>
                <div className="parrot"></div>
                <div className="parrot"></div>
              </button>
            </div>
          }
      </div>
    )
  }
}



