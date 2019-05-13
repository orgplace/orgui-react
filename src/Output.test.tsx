import React from 'react'
import { OuiOutput } from './Output'
import renderer from 'react-test-renderer';

test('OuiOutput', function() {
	const component = renderer.create(<OuiOutput>test</OuiOutput>);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
