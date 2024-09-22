<script setup>
	import { ref, computed } from 'vue';

	const props = defineProps({
		title: {type: String, required: true},
		inputLabel: {type: String, required: true},
		outputLabel: {type: String, required: true},
		conversionFunction: {type: Function, required: true},
	});

	const amount = ref(0);
	const result = computed(() => {
		return Math.round(props.conversionFunction(amount.value));
	})

</script>


<template>
	<div class="container">
		<h4 class="title">{{ props.title }}</h4>

		<div class="inputs">
			<label for="amount">{{ props.inputLabel }}: </label>
			<input v-model="amount" type="number" name="amount" id="amount">
			<p>{{ outputLabel }}: {{ result }}</p>
		</div>
	</div>

</template>


<style scoped>
	.container {
		display: inline-flex;
		flex-direction: column;
		gap: 1em;

		padding: 1em;
		border-radius: 0.5em;
		background-color: var(--dark-gray);
	}

	.inputs input {
		border: none;
		padding: 0.25em 0.5em;

		max-width: 10em;
		margin-bottom: 1em;
		background-color: var(--beige);
	}
	
	.title {
		text-align: center;
	}
</style>