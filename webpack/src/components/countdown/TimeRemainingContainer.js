import React, { Component } from 'react'

import UnitContainer from "./UnitContainer"

export default class TimeRemainingContainer extends Component {

	render() {
		const { week, day, hour, minute, second } = this.props;

		return (
            <div class="countdown-container">
            	<UnitContainer amount={week} unit={"week"} max={52}/>
            	<UnitContainer amount={day} unit={"day"} max={7}/>
            	<UnitContainer amount={hour} unit={"hour"} max={24}/>
            	<UnitContainer amount={minute} unit={"minute"} max={60}/>
            	<UnitContainer amount={second} unit={"second"} max={60}/>
            </div>
		);
	}
}