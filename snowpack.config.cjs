// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	mount: {
		'src/components': '/_components',
		'src/stores': '/_stores'
    
	},
	alias: {
		$components: './src/components',
		$stores: './src/stores'
	}
};
