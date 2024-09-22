<script setup>
	import { ref } from "vue";

	import { xpPointsToLevels, levelsToXpPoints} from "./logic/conversions.js";

	import XpLevelsForm from "./components/XpLevelsForm.vue";
	import ActionList from "./components/ActionList.vue";
	import Converter from "./components/Converter.vue";

	// Shared state between childs
	const xpPointsNeeded = ref(0);
</script>

<template>
	<div class="wrapper">
		<header>
			<h1 class="title">Minecraft Xp Calculator</h1>
		</header>

		<main class="main">
			<div class="converters-container">
				<h3>Converters</h3>

				<div class="converters">
					<Converter 
						title="Xp points to levels"
						input-label="Xp points"
						output-label="Equals Level 0 to"
						:conversion-function="xpPointsToLevels"
					></Converter>
	
					<Converter
						title="Levels to Xp points"
						input-label="Levels"
						output-label="Xp points"
						:conversion-function="levelsToXpPoints"
					></Converter>
				</div>
			</div>

			<!-- Change this class name for something more descriptive -->
			<div class="how-much-xp-do-i-need">
				<h3>How many levels do you want?</h3>
				
				<XpLevelsForm 
					v-model="xpPointsNeeded"
					class="xp-level-form"
				></XpLevelsForm>

				
			</div>


			<div class="actions-needed">
				<h3>
					Actions needed 
					<span v-if="xpPointsNeeded > 0">to reach {{ xpPointsNeeded }} xp</span>
				</h3>

				<ActionList :xp-points-needed="xpPointsNeeded"></ActionList>
			</div>
		</main>
		
		<footer class="footer">
			<p>
				Made with &lt;3 by 
				<a href="https://github.com/Sebastian-0110" target="_blank">Sebastian Mendoza</a>
			</p>
		</footer>
	</div>
</template>

<style scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 2em;

		height: 100vh;
		overflow-y: auto;
	}

	.title {
		padding: 0.5em;
		text-align: center;
		background-color: var(--dark-gray);
	}

	.main {
		display: flex;
		flex-direction: column;
		gap: 3em;

		flex-grow: 1;
	}

	.converters-container, .how-much-xp-do-i-need {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.how-much-xp-do-i-need {
		align-items: center;
	}

	.converters {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1em;
	}

	.footer {
		padding: 1em;
		background-color: var(--light-gray);
	}

	h3 {
		text-align: center;
	}

	a:link, a:visited {
		color: white;
	}

</style>
