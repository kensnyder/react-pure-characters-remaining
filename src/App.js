import React, { useState } from 'react';
import { WhatIsThis } from './components/WhatIsThis.js';
import { CharactersRemaining } from './components/CharactersRemaining.js';

export function App() {
	const [text, setText] = useState(
		'Here is some text that I already typed for you. ',
	);
	const max = 60;

	return (
		<div>
			<div>Enter your message. (Max {max} characters)</div>
			<CharactersRemaining
				max={max}
				tag="textarea"
				value={text}
				onChange={onTextChange}
				placeholder="Some placeholder text"
			/>
			<WhatIsThis />
		</div>
	);

	function onTextChange(event) {
		return setText(event.target.value);
	}
}
