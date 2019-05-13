import React from 'react'
import { OuiInputSelect } from './InputSelect'
import renderer from 'react-test-renderer';


test('OuiInputSelect', function() {
	const component = renderer.create(<OuiInputSelect><option>A</option></OuiInputSelect>);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
