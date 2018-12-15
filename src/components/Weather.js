import React from 'react'


class Weather extends React.Component {
	render() {
		const { temperature, city, country, humidity, description } = this.props
		return (
			<div>
				{city && country &&
					<p>Location: {city} , { country }</p>
				}
				{temperature && <p>Temperature: { temperature }</p>}
				{humidity && <p>Humidity: { humidity }</p>}
				{description && <p>Conditions: { description }</p>}
			</div>
		)
	}
}

export default Weather