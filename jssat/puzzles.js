export const puzzles = [
	{
		title: "hipster null values",
		expression: `Number.isNaN(Number(a))
	&& !Number.isNaN(a)
	&& typeof a != "string"
	&& typeof a != "undefined"
	&& !a.toString().includes("[")`,
		inputs: ["a"],
	},
];
