<script setup>
	import { actions } from "../logic/actions.js";

	const props = defineProps({
		xpPointsNeeded: {type: Number, required: true},
	});

</script>


<template>
	<div class="container">
		<div class="category" v-for="(object, category) in actions">
			<h4>{{ category }}</h4>
			
			<table class="sources">
				<thead>
					<tr>
						<th>Source</th>
						<th>Xp Per Action</th>
						<th>Actions Needed</th>
					</tr>
				</thead>
				
				<tbody>
					<tr v-for="sourceObj in object">
						<td class="source">
							{{ sourceObj.sources.join(", ") }}
						</td>
						
						<td class="xp-per-action">
							<template v-if="Array.isArray(sourceObj.xpPerAction)">
								{{ sourceObj.xpPerAction[0] }} - {{ sourceObj.xpPerAction[1] }}
							</template>
	
							<template v-else>
								{{ sourceObj.xpPerAction }}
							</template>
						</td>
						
						<td class="actions-needed">
							<template v-if="xpPointsNeeded > 0">
								<template v-if="Array.isArray(sourceObj.xpPerAction)">
									{{ Math.ceil(xpPointsNeeded / sourceObj.xpPerAction[1]) }}
									to
									{{ Math.ceil(xpPointsNeeded / sourceObj.xpPerAction[0]) }}
								</template>
								
								<template v-else>
									{{ Math.ceil(xpPointsNeeded / sourceObj.xpPerAction) }}
								</template>

							</template>

							<template v-else>
								-
							</template>
						</td>
					</tr>
				</tbody>
			
			</table>
		</div>
	</div>
</template>


<style scoped>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1em;
	
		padding: 1em;
	}
	
	.category {
		padding: 1em;
		border-radius: 0.5em;
		background-color: var(--dark-gray);
	}

	.source {
		max-width: 20em;
	}

	.xp-per-action, .actions-needed {
		text-align: center;
	}

	table {
		border-collapse: collapse;
		border: 1px solid var(--light-gray);
	}

	th, td {
		text-align: center;
		padding: 0.5em;
	}

	td {
		border: 1px solid var(--light-gray);
	}

	h4 {
		text-align: center;
		margin-bottom: 1em;
	}
</style>