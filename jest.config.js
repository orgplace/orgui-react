module.exports = {
	moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
	transform: {
	  "\\.(ts|tsx)$": "ts-jest",
	},
	modulePaths: ["./src"],
	testMatch: ["<rootDir>/src/**/*.(test|spec).+(ts|tsx)"],
};
