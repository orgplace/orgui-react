import React from 'react'
import { OuiButton } from './Button'
import renderer from 'react-test-renderer';

test('OuiButton', function() {
	const component = renderer.create(<OuiButton>test</OuiButton>);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
