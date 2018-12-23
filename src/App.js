import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '43ce3234b5a8aecfac5633a6504126e0'

class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}

	getWeather = async (e) => {
		e.preventDefault()

		const city = e.target.elements.city.value
		const country = e.target.elements.country.value
		const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
		const data = await apiCall.json()

		if (city && country) {
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: ""
			})
		} else {
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error:'Please enter value'
			})
		}
	}

	render() {
		const { 
			temperature,
			city,
			country,
			humidity,
			description,
			error
		 } = this.state
		return (
			<div>
				<div className='wrapper'>
					<div className='wrap-container'>
						<div className='title-container'>
							<Titles />
						</div>
						<div className='form-container'>									
							<Form getWeather={this.getWeather} />
							<Weather 
								temperature={temperature} 
								city={city}
								country={country}
								humidity={humidity}
								description={description}
								error={error}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App