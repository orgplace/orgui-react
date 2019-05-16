import React from 'react';
import renderer from 'react-test-renderer';
import { OuiBreadcrumb, OuiBreadcrumbItem } from './Breadcrumb';

test('OuiBreadcrumb', function() {
	const component = renderer.create(
		<OuiBreadcrumb>
			<OuiBreadcrumbItem href="#">A</OuiBreadcrumbItem>
			<OuiBreadcrumbItem href="#">B</OuiBreadcrumbItem>
			<OuiBreadcrumbItem href="#">C</OuiBreadcrumbItem>
		</OuiBreadcrumb>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
