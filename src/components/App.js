import React from 'react';
import Parallax from 'react-springy-parallax';
import Coverflow from 'react-coverflow';
import Step from './Step'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

export default class extends React.Component {
    constructor(props) {
        super(props)

        let steps = [
            { id: '5andarsul', url: 'https://www.youtube.com/watch?v=EN37lf2XrFQ&feature=youtu.be', label: '5º andar ala sul' },
            { id: '12andarsul', url: 'https://www.youtube.com/watch?v=cjPlLM6UOY4&feature=youtu.be', label: '12º andar ala sul' },
            { id: '12andarnorte', url: 'https://www.youtube.com/watch?v=D27944kmN_Y&feature=youtu.be', label: '12º andar ala norte' },
            { id: '16andarsul', url: 'https://www.youtube.com/watch?v=BpF7XWTKMGI&feature=youtu.be', label: '16º andar ala sul' },
            { id: '16andarnorte', url: 'https://www.youtube.com/watch?v=WwCnJsSnnRo&feature=youtu.be', label: '16º andar ala norte' },
        ]

        let route = [
            { id: '1', steps: ['5andarsul', '12andarsul', '12andarnorte', '16andarsul', '16andarnorte'] },
            { id: '2', steps: ['16andarsul', '16andarnorte', '5andarsul', '12andarsul', '12andarnorte'] },
            { id: '3', steps: ['12andarnorte', '5andarsul', '12andarsul', '16andarnorte', '16andarsul'] },
        ]

        let equip = '0'
        this.state = {
            steps,
            route,
            equip
        }

        this.setEquip = this.setEquip.bind(this)
        this.getStep = this.getStep.bind(this)
    }

    setEquip(idx) {
        this.setState({ equip: idx });
    }

    getStep(idx) {
        let route = this.state.route.find(x => x.id === this.state.equip)

        if (route) {
            let step = this.state.steps.find(x => x.id === route.steps[idx]);
            return step;
        }
    }

    render() {
        return (
            <div>
                <Parallax
                    ref={ref => this.parallax = ref}
                    pages={8}
                    scrolling={false}>

                    {/*Introdução*/}
                    <Parallax.Layer
                        offset={0} speed={0} factor={4}
                        style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }}
                    />

                    <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#eb145f' }} />
                    <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#2774ac' }} />
                    <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: '#8060a5' }} />
                    <Parallax.Layer offset={4} speed={1} style={{ backgroundColor: '#ff9100' }} />
                    <Parallax.Layer offset={5} speed={1} style={{ backgroundColor: '#243B4A' }} />
                    <Parallax.Layer offset={6} speed={1} style={{ backgroundColor: '#805E73' }} />
                    <Parallax.Layer offset={7} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                    {/*Times*/}
                    <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.2 }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                    </Parallax.Layer>

                    <Parallax.Layer offset={1.05} speed={0.3} style={{ pointerEvents: 'none' }}>
                        <img alt="" src={url('compass')} style={{ width: '15%', marginLeft: '65%' }} />
                    </Parallax.Layer>

                    <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.2 }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                    </Parallax.Layer>

                    <Parallax.Layer offset={1.85} speed={0.3} style={{ pointerEvents: 'none' }}>
                        <img alt="" src={url('map')} style={{ width: '15%', marginLeft: '15%' }} />
                    </Parallax.Layer>

                    {/*Andar 1*/}
                    <Parallax.Layer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                    </Parallax.Layer>

                    <Parallax.Layer offset={2.6} speed={-0.1} style={{ opacity: 0.4 }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                    </Parallax.Layer>

                    {/*Andar 2*/}
                    <Parallax.Layer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '5%', marginLeft: '55%' }} />
                    </Parallax.Layer>
                    <Parallax.Layer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                    </Parallax.Layer>

                    {/*Andar 3*/}
                    <Parallax.Layer offset={4} speed={0.2} style={{ opacity: 0.2 }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '5%', marginLeft: '55%' }} />
                    </Parallax.Layer>
                    <Parallax.Layer offset={4.6} speed={0.4} style={{ opacity: 0.6 }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                    </Parallax.Layer>

                    {/*Andar 4*/}
                    <Parallax.Layer offset={5} speed={0.2} style={{ opacity: 0.2 }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '5%', marginLeft: '55%' }} />
                    </Parallax.Layer>
                    <Parallax.Layer offset={5.6} speed={0.4} style={{ opacity: 0.6 }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                    </Parallax.Layer>

                    {/*Andar 5*/}
                    <Parallax.Layer offset={6} speed={0.2} style={{ opacity: 0.2 }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '5%', marginLeft: '55%' }} />
                    </Parallax.Layer>
                    <Parallax.Layer offset={6.6} speed={0.4} style={{ opacity: 0.6 }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                    </Parallax.Layer>

                    {/*Final*/}
                    <Parallax.Layer
                        offset={7.1} speed={0}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                    </Parallax.Layer>
                    <Parallax.Layer
                        offset={7.2} speed={0}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '34%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '67%' }} />
                        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '96%' }} />
                    </Parallax.Layer>
                    <Parallax.Layer
                        offset={7.3} speed={-0.5}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                        <img alt="" src={url('goal')} style={{ width: '60%' }} />
                    </Parallax.Layer>

                    {/*Introdução*/}
                    <Parallax.Layer
                        offset={0} speed={0.5}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                        <div className="main-content">
                            <div className="item"
                                style={{
                                    height: '250px'
                                }}>
                                <img src='assets/Wiz_BPO_negativa.png' alt='Wiz BPO' style={{
                                    height: '100%'
                                }} />
                            </div>
                            <div className="item"
                                style={{
                                    whiteSpace: 'pre',
                                    fontFamily: 'Menlo-Regular, Menlo, monospace',
                                    fontSize: 14,
                                    lineHeight: '10px',
                                    color: 'white',
                                }}>

                                <p><Gray> &gt;</Gray>  <Blue>Bem vindo intercambista!</Blue></p>
                                <p><Gray> &gt;</Gray>  npm install wiz-bpo --save</p>
                                <br />
                                <p><Gray> 1</Gray>  <Pink>new</Pink> Wizzer<Gray>(&#123;</Gray></p>
                                <p><Gray> 2</Gray>      <Yellow>output</Yellow><Pink>:</Pink> _nova_percepção<Gray>,</Gray></p>
                                <p><Gray> 3</Gray>      <Yellow>publicport</Yellow><Pink>:</Pink> <Green>'5º andar ala sul'</Green></p>
                                <p><Gray> 4</Gray>          <Pink>||</Pink>&nbsp;<Green>'12º andar norte'</Green></p>
                                <p><Gray> 5</Gray>          <Pink>||</Pink>&nbsp;<Green>'12º andar sul'</Green></p>
                                <p><Gray> 6</Gray>          <Pink>||</Pink>&nbsp;<Green>'16º andar ala norte'</Green></p>
                                <p><Gray> 7</Gray>          <Pink>||</Pink>&nbsp;<Green>'16º andar ala sul'</Green><Gray>,</Gray></p>
                                <p><Gray> 8</Gray>  <Gray>})</Gray><Pink>.</Pink><Lightblue>start</Lightblue><Gray>()</Gray></p>
                            </div>

                            <div className="item button-jittery" >
                                <button onClick={() => this.parallax.scrollTo(1)}>Iniciar!</button>
                            </div>
                        </div>
                    </Parallax.Layer>

                    {/*Times*/}
                    <Parallax.Layer
                        offset={1} speed={0}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="main-content">
                            <div className="item" style={{
                                whiteSpace: 'pre',
                                fontFamily: 'Menlo-Regular, Menlo, monospace',
                                fontSize: 20,
                                lineHeight: '20px',
                                color: 'white',
                                height: '50vh'
                            }}>
                                <Coverflow
                                    width={480}
                                    height={480}
                                    displayQuantityOfSide={2}
                                    currentFigureScale={1.2}
                                    navigation={false}
                                    enableHeading={true}
                                    active={0}
                                >
                                    <img src={url('backpack')} alt='Time 1' onClick={() => this.setEquip('1')} />
                                    <img src={url('backpack_1')} alt='Time 2' onClick={() => this.setEquip('2')} />
                                    <img src={url('backpack_2')} alt='Time 3' onClick={() => this.setEquip('3')} />
                                </Coverflow>
                            </div>
                            <div className="item button-jittery" style={{ height: '50vh' }}>
                                {this.state.equip !== '0' && <button onClick={() => this.parallax.scrollTo(2)}>Time {this.state.equip}, começar!</button>}
                            </div>
                        </div>
                    </Parallax.Layer>

                    {/*Andar 1*/}
                    <Parallax.Layer
                        offset={2} speed={0}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {this.state.equip !== '0' && <Step id="stp-1" equip={this.state.equip} onFinish={() => this.parallax.scrollTo(3)} dest={(equip) => this.getStep('0')} />}
                    </Parallax.Layer>

                    {/*Andar 2*/}
                    <Parallax.Layer
                        offset={3} speed={0}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                        {this.state.equip !== '0' && <Step id="stp-2" equip={this.state.equip} onFinish={() => this.parallax.scrollTo(4)} dest={(equip) => this.getStep('1')} />}

                    </Parallax.Layer>

                    {/*Andar 3*/}
                    <Parallax.Layer
                        offset={4} speed={0}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                        {this.state.equip !== '0' && <Step id="stp-3" equip={this.state.equip} onFinish={() => this.parallax.scrollTo(5)} dest={(equip) => this.getStep('2')} />}

                    </Parallax.Layer>

                    {/*Andar 4*/}
                    <Parallax.Layer
                        offset={5} speed={0}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                        {this.state.equip !== '0' && <Step id="stp-4" equip={this.state.equip} onFinish={() => this.parallax.scrollTo(6)} dest={(equip) => this.getStep('3')} />}

                    </Parallax.Layer>

                    {/*Andar 5*/}
                    <Parallax.Layer
                        offset={6} speed={0}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                        {this.state.equip !== '0' && <Step id="stp-5" equip={this.state.equip} onFinish={() => this.parallax.scrollTo(7)} dest={(equip) => this.getStep('4')} />}
                    </Parallax.Layer>

                    {/*Final*/}
                    <Parallax.Layer
                        offset={7} speed={-0}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                             <div className="main-content" style={{height: '80%'}}>
        <div className="item"
          style={{
            whiteSpace: 'pre',
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            color: 'white',
            textAlign: 'center',
          }}>

          <h1>Parabéns!</h1>
          <h3>Volte para o início.</h3>
        </div>
        </div>
                    </Parallax.Layer>
                </Parallax>
                {/*<Webchat />*/}
            </div>
        );
    }
}
