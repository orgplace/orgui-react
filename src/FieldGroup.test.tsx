import React from 'react';
import renderer from 'react-test-renderer';
import { OuiFieldGroup } from './FieldGroup';
import { OuiInputText } from './InputText';

test('OuiFieldGroup', function() {
	const component = renderer.create(
		<OuiFieldGroup label={<span style={{fontWeight: "bold"}}>Label</span>} required helpText="help">
			<OuiInputText />
		</OuiFieldGroup>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
