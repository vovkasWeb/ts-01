let revenue: number = 1000;
let bonus: number = 500;
let c: string = 'str';
let d: boolean = true;
let res: number = revenue + bonus;
console.log(res);



function getFullName(firstname: string,surname: string):string {
	// if(typeof firstname !=='string'){
	// 	throw new Error('!!!!!');
	// }
	return `${firstname} ${surname}`;
}

const getFullNameArrow = (firstname: string, surname: string) : string =>{
	return `${firstname} ${surname}`;
}

console.log(getFullName('vova','orlovsky'));