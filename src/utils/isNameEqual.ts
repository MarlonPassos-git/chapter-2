export function isNameEqual(name: string) {
	return function <Obj extends { name?: string }>(obj: Obj) {
		return obj.name === name
	}
}
