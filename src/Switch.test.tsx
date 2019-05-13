import React from 'react'
import { OuiSwitch } from './Switch'
import renderer from 'react-test-renderer';

test('OuiSwitch', function() {
	const component = renderer.create(<OuiSwitch>test</OuiSwitch>);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
