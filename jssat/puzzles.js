export const puzzles = [
	{
		title: "hipster null values",
		expression: `!Number.isNaN(a)
	&& isNaN(a)
	&& typeof a != "string"
	&& typeof a != "undefined"
	&& !a.toString().includes("[")`,
		inputs: ["a"],
	},
	{
		title: "hipster null values",
		expression: `!Number.isNaN(a)
	&& isNaN(a)
	&& typeof a != "string"
	&& typeof a != "undefined"
	&& !a.toString().includes("[")`,
		inputs: ["a"],
	},
];
