interface User{
	name: string;
}

const a ={};
assertsUser(a);

a.name ='васся';


function assertsUser(obj: unknown): asserts obj is User{
	if(typeof obj === 'object' && !!obj && 'name' in obj){
return 
	}
	throw new Error('не пользователь');
}

