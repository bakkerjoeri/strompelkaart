import { derived, get, writable } from "svelte/store";
import { createLocalStore } from "./localStore";

export interface Stamp {
	text: string;
	isStamped: boolean;
}

export const stampsPerCard = 10;

export const completedCards =  createLocalStore('completedCards', 0);
export const stamps = createLocalStore('stamps', createStampset(stampsPerCard));

export const currentStampCount = derived(stamps, (stamps) => {
	return stamps.filter(stamp => stamp.isStamped).length
}) ;

export const totalStampCount = derived([currentStampCount, completedCards], ([currentStampCount, completedCards]) => {
	return currentStampCount + (completedCards * stampsPerCard)
});

export const isCurrentCardComplete = derived(stamps, (stamps) => {
	return stamps.every(stamp => stamp.isStamped);
});

export function completeCurrentCard() {
	stamps.set(createStampset(stampsPerCard));
	completedCards.set(get(completedCards) + 1);
}

function createStampset(amount: number): Stamp[] {
	let stamps: Stamp[] = [];

	for (let s = 0; s < amount; s += 1) {
		stamps.push({
			text: s < amount - 1 ? 'adten' : 'doe een trucje!',
			isStamped: false,
		});
	}

	return stamps;
}
