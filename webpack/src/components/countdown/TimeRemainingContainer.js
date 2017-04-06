import React, { Component } from 'react'

import UnitContainer from "./UnitContainer"

export default class TimeRemainingContainer extends Component {

	render() {
		const { week, day, hour, minute, second } = this.props;

		return (
            <div class="countdown-container">
            	<UnitContainer amount={week} unit={"week"}/>
            	<UnitContainer amount={day} unit={"day"}/>
            	<UnitContainer amount={hour} unit={"hour"}/>
            	<UnitContainer amount={minute} unit={"minute"}/>
            	<UnitContainer amount={second} unit={"second"}/>
            </div>
		);
	}
}