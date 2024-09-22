// Formulas taken from: https://minecraft.fandom.com/wiki/Experience#Experience_orbs

function xpPointsNeededToReachNextLevel(level) {
	if (level >= 0 && level <= 15) {
		return 2 * level + 7;
	}

	if (level >= 16 && level <= 30) {
		return 5 * level - 38;
	}

	if (level >= 31) {
		return 9 * level - 158;
	}

	console.warn("Xp level can't be negative");
}

export function xpToReachLevel(currentLevel, targetLevel) {
	let totalXpNeeded = 0;

	for (let i = currentLevel; i < targetLevel; i++) {
		totalXpNeeded += xpPointsNeededToReachNextLevel(i);
	}

	return totalXpNeeded;
}

export function xpPointsToLevels(xpPoints) {
	if (xpPoints >= 0 && xpPoints <= 352) {
		return Math.sqrt(xpPoints + 9) - 3;
	}

	if (xpPoints >= 353 && xpPoints <= 1507) {
		return (81/10) + Math.sqrt((2/5) * (xpPoints - (7839/40)));
	}

	if (xpPoints >= 1508) {
		return (325/18) + Math.sqrt((2/9) * (xpPoints - (54215/72)));
	}

	console.warn("Xp points can't be negative");

}

export function levelsToXpPoints(levels) {
	if (levels >= 0 && levels <= 16) {
		return Math.pow(levels, 2) + 6 * levels;
	}

	if (levels >= 17 && levels <= 31) {
		return 2.5 * Math.pow(levels, 2) - 40.5 * levels + 360;
	}

	if (levels >=	 31) {
		return 4.5 * Math.pow(levels, 2) - 162.5 * levels + 2220;
	}

	console.warn("Xp levels can't be negative");
}
