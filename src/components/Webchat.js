import { DirectLine } from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.directLine = new DirectLine({ token: '' });
    }

    render() {
        return (
            <div id="chat">
                <div className="box-chat" v-show="chatVisible">
                    <p>Liz</p>
                    <button className="btn-close" click="openChat">
                        <span className="icon icon-fechar"></span>
                    </button>
                    {false && <ReactWebChat directLine={this.directLine} userID='teste' />}
                </div>
                <button click="openChat" className="btn-chat btn-cs">
                    <span className="icon icon-conversa" v-if="!chatVisible"></span>
                    <span className="icon icon-fechar" v-if="chatVisible"></span>
                </button>
            </div>
        );
    }
}
