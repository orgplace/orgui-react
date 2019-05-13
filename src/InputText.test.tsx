import React from 'react'
import { OuiInputText } from './InputText'
import renderer from 'react-test-renderer';


test('OuiInputText', function() {
	const component = renderer.create(<OuiInputText />);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
