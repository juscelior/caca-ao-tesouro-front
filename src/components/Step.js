import React from 'react'
import QrReader from 'react-qr-scanner'
import ReactPlayer from 'react-player'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'


export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      delay: 100,
      result: null,
      pass: 0
    }

    this.handleScan = this.handleScan.bind(this)
    this.openImageDialog = this.openImageDialog.bind(this)
    this.onVideoFinish = this.onVideoFinish.bind(this)
    this.nextStep = this.nextStep.bind(this)

  }

  componentDidMount() {
    let step = this.props.dest(this.props.equip)
    if (step) {
      let label = step.label
      let url = step.url
      let id = step.id

      this.setState({
        label,
        url,
        id
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.equip !== prevProps.equip) {
      let step = this.props.dest(this.props.equip)
      if (step) {
        let label = step.label
        let url = step.url
        let id = step.id

        this.setState({
          label,
          url,
          id
        })
      }
    }
  }

  handleScan(data) {

    if (data === this.state.id) {
      this.setState({
        result: this.state.url,
        pass: 1
      })
    } else {

      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui' style={{
              whiteSpace: 'pre',
              fontFamily: 'Menlo-Regular, Menlo, monospace',
              color: 'white',
              textAlign: 'center'
            }}>
              <h1>Lugar errado!</h1>
              <p style={{ paddingBottom: '15px' }}>{'Vá para o ' + this.state.label + '.'}</p>
              <div className="item button-rainbow">
                <button onClick={onClose}>Entendi!
                <div className="rainbow"></div>
                </button>
              </div>
            </div>
          );
        }
      });
    }
  }

  openImageDialog() {
    this.refs.qrcode.openImageDialog()
  }

  onVideoFinish() {
    this.setState({
      pass: 2
    })
  }

  nextStep() {
    this.props.onFinish();
  }

  handleError(err) {
    alert(err)
    console.error(err)
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return (
      <div className="main-content">
        <div className="item"
          style={{
            whiteSpace: 'pre',
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            color: 'white',
            textAlign: 'center'
          }}>

          <h1>Instruções</h1>
          <ol style={{ textAlign: 'left', width: '100%' }}>
            <li>Vá para o {this.state.label}.</li>
            <li>Encontre o QR code.</li>
            <li>Assista o vídeo até o final.</li>
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
          <div className="item button-hand" style={{ height: '55vh' }}>
            <button onClick={this.openImageDialog}>Ler QR Code
                <div className="hands"></div>
            </button>
          </div>
        }

        {this.state.pass === 1 &&
          <div className="item" >

            <ReactPlayer
              className='react-player'
              url={this.state.result}
              width='100%'
              height='100%'
              onEnded={this.onVideoFinish}
              config={{
                youtube: {
                  playerVars: { showinfo: '0', autoplay: '1', controls: '0' }
                }
              }}
            />
          </div>
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



