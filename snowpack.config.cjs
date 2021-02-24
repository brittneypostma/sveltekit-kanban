// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	mount: {
		'src/components': '/_components',
		'src/data': '/_data'
	},
	alias: {
		$components: './src/components',
		$data: './src/data'
	}
};
