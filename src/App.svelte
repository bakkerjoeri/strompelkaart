<script lang="ts">
	import {
		stamps,
		completedCards,
		isCurrentCardComplete,
		completeCurrentCard,
		totalStampCount
	} from './store';
</script>

<h1><span class="first-word">de</span>Strompelkaart</h1>

<div class="stamps">
	<ul class="stamps__list">
		{#each $stamps as stamp, i (i)}
			<li class="stamp">
				<input class="stamp__input" type="checkbox" id={`stamp-${i + 1}`} bind:checked={stamp.isStamped}>

				<label class="stamp__label" class:is-stamped={stamp.isStamped} for={`stamp-${i + 1}`}>
					<span class="stamp__number">
						{i + 1}
					</span>

					<span class="stamp__text">
						{stamp.text}
					</span>
				</label>
			</li>
		{/each}
	</ul>
</div>

{#if $isCurrentCardComplete}
	<div class="congrats">
		<p>Kaartje vol, lekker gewerkt!</p>

		<button class="request-new-card-button" type="button" on:click={completeCurrentCard}>Nieuwe kaart por favor</button>
	</div>
{/if}

{#if $completedCards > 0}
	<ul class="scoreboard">
		<li class="scoreboard__item">welverdiende strompels: {$totalStampCount}</li>
		<li class="scoreboard__item">volle kaarten: {$completedCards}</li>
	</ul>
{/if}

<footer>
	<p>Leuk grapje verder hoor</p>
</footer>

<style lang="scss">
	h1 {
		display: flex;
		flex-direction: column;
		align-items: center;

		.first-word {
			font-size: 0.75em;
			font-style: italic;
		}
	}

	footer {
		font-style: italic;
		text-align: center;
	}

	.stamps {
		display: flex;
		align-items: center;
	}

	.stamps__list {
		list-style: none;
		padding-left: 0;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
		grid-gap: 15px;
		margin: 0 auto;

		@media (min-width: 600px) {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
			grid-gap: 25px;
		}
	}

	.stamp {
		margin: 0 auto;

		&:last-child {
			grid-column: 1 / -1;

			@media (min-width: 600px) {
				grid-column: initial;
			}
		}
	}

	.stamp__label {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 85px;
		height: 85px;
		border-radius: 50px;
		border: 4px solid black;

		&.is-stamped {
			background-color:hsl(0, 100%, 83%);
		}
	}

	.stamp__number {
		margin-bottom: 5px;
	}

	.stamp__text {
		font-weight: bold;
		font-style: italic;
	}

	.stamp__number,
	.stamp__text {
		text-align: center;
	}

	.stamp__input {
		display: none;
	}

	.congrats {
		display: flex;
		flex-direction: column;
		align-items: center;

		p {
			// font-size: 26px;
			margin-bottom: 15px;
		}
	}

	.request-new-card-button {
		background-color: white;
		border: 3px solid black;
		border-radius: 15px;
		padding: 8px 12px;
		font-size: 17px;
	}

	.scoreboard {
		display: flex;
		justify-content: center;
		list-style: none;
		padding-left: 0;
	}

	.scoreboard__item + .scoreboard__item {
		margin-left: 10px;

		&::before {
			content: '|';
			padding-right: 10px;
		}
	}
</style>
