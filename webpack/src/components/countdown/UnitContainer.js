import React, { Component } from 'react'

import isEmpty from 'lodash/isEmpty'

export default class UnitContainer extends Component {
	getCorrectUnit() {
        const { amount, unit } = this.props;
        return amount > 1 ? unit + "s" : unit;
    }

	render() {
		const { amount, unit } = this.props;
        const formattedUnit = this.getCorrectUnit();
        const className = unit + " unit-container";

		return (
			<div className={className}>
                <div className="number">{amount}</div>
                <div className="unit">{formattedUnit}</div>
            </div>
		);
	}
}