export interface ICar {
	make: string;
	model: string;
	year: number;
}

export const cars: ICar[] = [
	{
		make: "Ford",
		model: "Escape",
		year: 2009,
	},
	{
		make: "Land Rover",
		model: "Discovery",
		year: 2003,
	},
	{
		make: "Chevrolet",
		model: "Monte Carlo",
		year: 1997,
	},
	{
		make: "Mitsubishi",
		model: "Galant",
		year: 1984,
	},
	{
		make: "Pontiac",
		model: "Grand Prix",
		year: 1969,
	},
	{
		make: "Bentley",
		model: "Azure",
		year: 2010,
	},
	{
		make: "Toyota",
		model: "Sienna",
		year: 2006,
	},
	{
		make: "GMC",
		model: "Jimmy",
		year: 1995,
	},
	{
		make: "Ford",
		model: "Mustang",
		year: 1974,
	},
	{
		make: "Ford",
		model: "F150",
		year: 1993,
	},
];

export const links = [
	{ name: "home", route: "/" },
	{ name: "IonList examples", route: "/list-example" },
];
