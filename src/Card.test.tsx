import React from 'react';
import renderer from 'react-test-renderer';
import { OuiCard } from './Card';

test('OuiCard', function() {
	const component = renderer.create(
		<OuiCard>
			<h1>Sample</h1>
			<div>Contents</div>
		</OuiCard>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
