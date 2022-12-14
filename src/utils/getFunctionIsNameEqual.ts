export function getFunctionIsNameEqual(name: string) {
	return function <Obj extends { name?: string }>(obj: Obj) {
		return obj.name === name
	}
}
