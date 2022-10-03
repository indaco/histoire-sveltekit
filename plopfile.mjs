export default function (plop) {
	plop.setGenerator('component', {
		description: 'Create a new component',
		prompts: [
			{
				// Name your Component
				type: 'input',
				name: 'name',
				message: 'What is the name of your component?'
			}
		],
		actions: [
			{
				// Create the component files
				type: 'addMany',
				destination: './src/lib/components/{{properCase name}}',
				base: `.templates/component/definition`,
				templateFiles: `.templates/component/definition/*.hbs`
			},
			{
				// Export component in lib/index.ts
				type: 'append',
				path: './src/lib/index.ts',
				templateFile: '.templates/component/lib-index.ts.hbs'
			},
			{
				// Create a test suite for the component
				type: 'add',
				path: './tests/{{properCase name}}.spec.ts',
				templateFile: '.templates/component/tests/test.spec.ts.hbs'
			},
			{
				// Create the story files
				type: 'addMany',
				destination: './src/stories/{{properCase name}}',
				base: `.templates/component/histoire`,
				templateFiles: `.templates/component/histoire/*.hbs`
			}
		]
	});
}
