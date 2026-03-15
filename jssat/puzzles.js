export const puzzles = [
	{
		title: "hipster null values",
		key: "hipster-null-values",
		expression: `!Number.isNaN(a)
	&& isNaN(a)
	&& typeof a != "string"
	&& !a.toString().includes("[")
	&& !a.toString().includes(",")
	&& a.toString.toString() ==
		\`function toString() {\\n\\
    [native code]\\n}\\
\``,
		inputs: ["a"],
	},
];
