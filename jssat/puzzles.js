export const puzzles = [
	{
		title: "hipster null values",
		key: "hipster-null-values",
		expression: `!Number.isNaN(a)
	&& isNaN(a)
	&& typeof a != "string"
	&& typeof a != "undefined"
	&& !a.toString().includes("[")`,
		inputs: ["a"],
	},
	{
		title: "test puzzle",
		key: "test-puzzle",
		expression: `a === b.toString()`,
		inputs: ["a", "b"],
	},
];
