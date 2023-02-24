
function dumpError(): never{
	while(true){}
}

function rec():never{
	return rec();
}

// const a: never =null;
const a: void = undefined;


type paymentAction = 'refund' | 'checkout' | 'reject';

// function processAction(action: paymentAction){
// 	switch(action){
// 		case 'refund':
// 			break;
// 		case 'checkout':
// 			break;

// 		default:
// 			const _: never = action;
// 			throw new Error('нет такого action');
// 	}
// }

function genereateError(message: string): never {
	throw new Error(message);
}


function isString(x: string | number): boolean{
	if(typeof x === 'string'){
		return true;
	}else if (typeof x==='number'){
		return false;
	}
	genereateError('error type');
}
console.log(isString(122));
