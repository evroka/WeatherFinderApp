import React from 'react'


const Form = props => (
	<div className='input-container'>
		<form onSubmit={props.getWeather}>
			<input 
				className='textInput'
				type='text' 
				name='city' 
				placeholder='City...' 				
			/>
			<input 
				className='textInput'
				type='text' 
				name='country' 
				placeholder='Country...' 
			/>
			<button>Get Weather</button>
		</form>
	</div>
)

export default Form