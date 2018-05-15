import React, { Component } from 'react'

import Moment from 'moment-timezone';

import TimeRemainingContainer from './TimeRemainingContainer'
import PicContainer from './PicContainer'

import isEmpty from 'lodash/isEmpty';

export default class BirthdayCountdown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			week : "",
			day : "",
			hour:  "",
			minute : "", 
			second : "",
			isBirthdayNow : false
		};
	}

	componentDidMount() {
		const { birthday } = this.props.member;
		var targetDate = Moment.tz(birthday, "MM-DD-YYYY", "Asia/Tokyo");
		targetDate.year(Moment().tz("Asia/Tokyo").year());

		if (this.checkIfCurrentDateIsBeforeBirthday(targetDate)) {
			targetDate.add(1, 'y')
		}
				
		this.loadInterval = setInterval(() => {
			var currentDate = Moment().tz("Asia/Tokyo", "MM-DD-YYYY");
			var duration = Moment.duration(targetDate.diff(currentDate)); 
			this.setState({
				week : Math.floor(duration.asDays() / 7),
				day : Math.floor(duration.asDays() % 7),
				hour:  duration.hours(),
				minute : duration.minutes(), 
				second : duration.seconds(),
				isBirthdayNow : this.checkIfCurrentDateIsABirthday(targetDate)
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.loadInterval)
	}

	checkIfCurrentDateIsBeforeBirthday(targetDate) {
		var now = Moment().tz("Asia/Tokyo");
        return targetDate.isBefore(now, 'day');
	}

	checkIfCurrentDateIsABirthday(targetDate) {
        var now = Moment().tz("Asia/Tokyo");
        return targetDate.isSame(now, 'day');
    }


	render() {
		const { week, day, hour, minute, second, isBirthdayNow } = this.state;
		const { group_id } = this.props;
		const { id, english, kanji, twitter, birthday, color, profile, char_kanji, char_en } = this.props.member;

		const textStyle = {
			borderBottom : "5px solid " + color
		}

		const twitterElem = isEmpty(twitter) ? "" : 
        (<span className="twitter">
            <a href={"https://twitter.com/" + twitter} target="_blank">
                <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
        </span>);

        const birthdayFormat = " " + Moment.tz(birthday, "MM-DD-YYYY", "Asia/Tokyo").format('MMM Do YYYY')

		return (
			<div id={id} className="member" style={textStyle}>
				<PicContainer group_id={group_id} id={id}/>
                <div className="name-container">
	                <span className="name english-name">{english}</span>
	                <span className="name kanji-name">{kanji}</span>
	            </div>
	            <div className="birthdate-container">
                    <span className="fa fa-birthday-cake" aria-hidden="true">
                    </span>
                    {birthdayFormat}
                </div>
				<div className='detail-container'>
					<div className='detail profile-container'>
						<span className="profile">
							<a href={profile} target="_blank">
				                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
				            </a>
						</span>
						{twitterElem}
					</div>
					<div className='detail character-container'>
						<span className='name english-name'>{char_en}</span><br/>
						<span className='name kanji-name'>{char_kanji}</span>
					</div>
				</div>
                <TimeRemainingContainer 
                	week={week} 
                	day={day} 
                	hour={hour} 
                	minute={minute} 
                	second={second}/>
			</div>
		);
	}
}