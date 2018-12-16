import React from 'react'

const Weather = (props) => {
	const { 
		temperature, 
		city,
		country,
		humidity,
		description,
		error
	 } = props
	 return (
		<div className='weather-info'>
			{city && country && 
				<p className='weather-param'>Location: 
					<span className='weather-value'> {city} , { country }</span>
				</p>
			}
			{temperature && 
				<p className='weather-param'>Temperature: 
					<span className='weather-value'> { temperature }</span>
				</p>
			}
			{humidity && 
				<p className='weather-param'>Humidity: 
					<span className='weather-value'> { humidity }</span>
				</p>
			}	
			{description && 
				<p className='weather-param'>Conditions: 
					<span className='weather-value'> { description }</span>
				</p>
			}
			{error && 
				<p className='weather-error'> { error }</p> 
			}
		</div>
	)
}

export default Weather