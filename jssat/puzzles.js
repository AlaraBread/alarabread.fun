export const puzzles = [
	{
		title: "hipster null values",
		key: "hipster-null-values",
		expression: `!Number.isNaN(a)
	&& isNaN(a)
	&& typeof a != "string"
	&& !a.toString().includes("[")
	&& !"length" in a`,
		inputs: ["a"],
	},
];
