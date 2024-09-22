<script setup>
	import { ref, computed } from "vue";
	import { xpToReachLevel } from "../logic/conversions.js";

	const model = defineModel();

	const currentLevel = ref(0);
	const targetLevel = ref(0);

	const xpPointsNeeded = computed({
		get() {
			return xpToReachLevel(currentLevel.value, targetLevel.value);
		},

		set(newValue) {
			model.value = newValue;
		}
	})

</script>


<template>
	<div class="container">
		<div class="inputs">
			<div>
				<label for="current-level">Current level: </label>
				<input 
					v-model="currentLevel"
					@input="xpPointsNeeded = xpPointsNeeded" 
					type="number"
					name="current-level"
					id="current-level"
				>
			</div>

			<div>
				<label for="current-level">Target level: </label>
				<input 
					v-model="targetLevel"
					@input="xpPointsNeeded = xpPointsNeeded"
					type="number"
					name="target-level"
					id="target-level"
				>
			</div>

			<p>Xp points needed: {{ model }}</p>
		</div>
	</div>
</template>


<style scoped>
	.container {
		display: inline-flex;
		flex-direction: column;
		gap: 1em;

		padding: 1em;
		background-color: var(--dark-gray);
		border-radius: 0.5em;

		max-width: fit-content;
	}
	
	.title {
		text-align: center;
	}
	
	.inputs input {
		border: none;
		padding: 0.25em 0.5em;
		
		max-width: 10em;
		margin-bottom: 1em;
		background-color: var(--beige);
	}

	.inputs * + * {
		margin-top: 0.5em;
	}
	
	.inputs > :last-child {
		text-align: center;
	}
</style>