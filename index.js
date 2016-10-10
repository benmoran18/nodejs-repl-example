
// Module imports
const repl = require('repl');

// Start the REPL server.
const server = repl.start('Type a command: ');

// Define custom commands.
// NOTE: commands defined in this way must be called with the '.' prefix e.g. .help
server.defineCommand('calculate', {
	help: 'Evaluates a mathematical expression and calculates the answer.',
	action: function(sum) {
		let result = eval(sum);
		console.log('\nSum of digits: %d\n', result);
	}
});
