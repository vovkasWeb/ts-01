let input: unknown;
input = 3;
input = ['sf', 'sdf'];

function run(i: unknown) {
	if (typeof i == 'number') {
		i++;
	} else {
		i
	}
}

run(input);
async function getData() {
	try {

		await fetch('');
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

async function getDataForce() {
	try {
		await fetch('');
	} catch (error) {
		const e = error as Error;
		console.log(e.message);
	}
}

type U1 = unknown | string;

type l1 = unknown & string;
