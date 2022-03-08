import { writable } from 'svelte/store';

export const is_authenticated = writable(false)

export { is_authenticated as default }