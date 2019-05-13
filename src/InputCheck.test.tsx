import React from 'react'
import { OuiInputCheck } from './InputCheck'
import renderer from 'react-test-renderer';


test('OuiInputCheck', function() {
	const component = renderer.create(<OuiInputCheck />);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
