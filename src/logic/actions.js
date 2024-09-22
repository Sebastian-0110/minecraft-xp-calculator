export const actions = {
	Mobs: [
		{
			sources: ["All passives (excluding bat)"], xpPerAction: [1, 3],
		},
		
		{
			sources: [
				"Cave Spider", 
				"Creeper", 
				"Drowned", 
				"Enderman", 
				"Ghast", 
				"Hoglin", 
				"Husk", 
				"Illusioner", 
				"Phantom", 
				"Piglin", 
				"Pillager", 
				"Shulker", 
				"Silverfish", 
				"Skeleton", 
				"Spider", 
				"Stray", 
				"Vex", 
				"Vindicator", 
				"Witch", 
				"Wither Skeleton", 
				"Zombie", 
				"Zoglin", 
				"Zombie Pigman"
			],
	
			xpPerAction: 5
		},
	
		{
			sources: ["Endermite"], xpPerAction: 3,
		},
	
		{
			sources: ["Large Slime", "Large Magma Cube"], xpPerAction: 4,
		},
	
		{
			sources: ["Medium Slime", "Medium Magma Cube"], xpPerAction: 2,
		},
	
		{
			sources: ["Small Slime", "Small Magma Cube"], xpPerAction: 1,
		},
	
		{
			sources: ["Spider Jockey", "Blaze", "Evoker", "Elder Guardian", "Guardian"], xpPerAction: 10,
		},
		
		{
			sources: ["Chicken Jockey"], xpPerAction: 22,
		},

		{
			sources: ["Baby Hostiles"], xpPerAction: 12,
		},

		{
			sources: ["Ravagaer"], xpPerAction: 20,
		}
	],

	"Smelting/Cooking": [
		{
			sources: ["Ancient Debris"], xpPerAction: 2,
		},

		{
			sources: ["Diamond Ore", "Emerald Ore", "Gold Ore"], xpPerAction: 1,
		},

		{
			sources: ["Iron Ore", "Redstone Ore"], xpPerAction: 0.7,
		},

		{
			sources: [
				"Clay Block",
				"Potato",
				"Raw beef",
				"Raw Chicken",
				"Raw Cod",
				"Raw Mutton",
				"Raw Porkchop",
				"Raw Rabbit",
				"Raw Salmon"
			],

			xpPerAction: 0.35,
		},

		{
			sources: ["Lapiz Ore", "Nether Quartz Ore"], xpPerAction: 0.2,
		},

		{
			sources: ["Wet Sponge", "Wood"], xpPerAction: 0.15,
		},

		{
			sources: ["Others"], xpPerAction: 0.1,
		},
	],

	Mining: [
		{
			sources: ["Monster Spawner"], xpPerAction: [1, 3],
		},

		{
			sources: ["Redstone Ore"], xpPerAction: [1, 5],
		},

		{
			sources: ["Lapis Ore", "Nether Quartz Ore"], xpPerAction: [2, 5],
		},

		{
			sources: ["Diamond Ore", "Emerald Ore"], xpPerAction: [3, 7],
		},

		{
			sources: ["Coal Ore"], xpPerAction: [0, 2],
		},
	],


	Bosses: [
		{
			sources: ["Enderdragon"], xpPerAction: 12000,
		},

		{
			sources: ["Wither"], xpPerAction: 50,
		}
	],

	Other: [
		{
			sources: ["Bottle O' Enchanting"], xpPerAction: [3, 11],
		},

		{
			sources: ["Trading With Villager"], xpPerAction: [3, 6],
		},

		{
			sources: ["Breeding Animals"], xpPerAction: [1, 7],
		},

		{
			sources: ["Catching Fish"], xpPerAction: [1, 6],
		}
	],

}