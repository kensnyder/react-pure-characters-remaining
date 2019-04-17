import React, { useState } from 'react';

export function CharactersRemaining({
	tag,
	max,
	value,
	label,
	onChange,
	...props
}) {
	value = value || '';
	max = max || 100;
	const [remaining, setRemaining] = useState(max - value.length);
	const Tag = tag || 'textarea';
	const labelClassName = [
		'cr-label',
		remaining > 10 ? 'cr-ok' : '',
		remaining <= 10 ? 'cr-close' : '',
		remaining < 0 ? 'cr-over' : '',
	]
		.filter(Boolean)
		.join(' ');

	return (
		<div className="cr-container">
			<Tag
				value={value}
				onChange={onInput}
				className="cr-input"
				{...props}
			/>
			<div className={labelClassName}>
				{remaining} {label}
			</div>
		</div>
	);

	function onInput(event) {
		const value = props.contenteditable
			? event.target.innerHTML
			: event.target.value;
		const remaining = max - value.length;
		setRemaining(remaining);
		event.charsRemaining = remaining;
		onChange(event);
	}
}
