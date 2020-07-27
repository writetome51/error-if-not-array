export function errorIfNotArray(arg) {
	if (!(Array.isArray(arg))) throw new Error('Input must be array.');
}
