import React, { Component } from 'react'

import Moment from 'moment-timezone';

import isEmpty from 'lodash/isEmpty';

export default class NameContainer extends Component {

	render() {
		const { english, kanji, twitter, birthday } = this.props;
        
		return (
            <div className="name-container">
                <span className="name english-name">{english}</span>
                <span className="name kanji-name">{kanji}</span>
            </div>
		);
	}
}