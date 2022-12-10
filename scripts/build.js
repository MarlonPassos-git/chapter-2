import { spawn } from 'node:child_process';
import { arrumaPath } from './arrumaPath.js';
import fs from 'node:fs/promises';

export function build() {
	const command = 'yarn tsc';
	return new Promise(resolve => {
		const child = spawn(command, { shell: true });

		// resolve when the process exits
		child.on('exit', () => {
			resolve();
		});
	});
}

function deletedDist() {
	return new Promise(async resolve => {
		const dir = 'dist';
		try {
			await fs.rm(dir, { recursive: true }, err => {
				if (err) {
					throw err;
				}
			});
		} catch (e) {
			console.log('Nao existe pasta dist');
		}
		resolve();
	});
}

(async () => {
	await deletedDist();
	console.log(1);
	await build();
	console.log(2);

	console.log(3);
	console.log('Build finalizado');
})();
