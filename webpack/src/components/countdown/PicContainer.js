import React, { Component } from 'react'

export default class PicContainer extends Component {

	render() {
		const { group_id, id } = this.props;
        const picStyle = {
			backgroundImage: "url(data/images/" + group_id + "/" + id + ".jpg)"
		}

		return (
            <div className="pics-container">
            	<img className="pic" src={"data/images/" + group_id + "/" + id + ".jpg"}/>
                <div className="arc"></div>
            </div>
		);
	}
}