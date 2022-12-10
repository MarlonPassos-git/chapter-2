import fs from 'node:fs';
import FileHound from 'filehound';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST_PATH = '../dist';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pat = path.resolve(__dirname, DIST_PATH);
export function arrumaPath() {
	const files = FileHound.create()
		.paths(pat)
		.discard('node_modules')
		.ext('js')
		.find();

	files.then(filePaths => {
		filePaths.forEach(filepath => {
			fs.readFile(filepath, 'utf8', (err, data) => {
				if (!data.match(/import .* from /g)) {
					return;
				}
				let newData = data.replace(
					/(import .* from\s+['"]\.)(.*)(?=['"])/g,
					'$1$2.js',
				);
				if (err) throw err;

				fs.writeFile(filepath, newData, function (err) {
					if (err) {
						throw err;
					}
				});
			});
		});
	});
}

arrumaPath();
