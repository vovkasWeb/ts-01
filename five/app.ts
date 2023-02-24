const arr = ['sdf', 1];
function logId(id: string | number | boolean) {
	if (typeof id === 'string') {
		console.log(id);
	} else if (typeof id === 'number') {
		console.log(id);
	} else {
		console.log(id);
	}
}

function logError(err: string | string[]) {
	if (Array.isArray(err)) {
		console.log(err);
	} else {
		console.log(err);
	}
}
function logObject(obj: { a: number } | { b: number }) {
	if ('a' in obj) {
		obj.a;
	}
	else {
		obj.b;
	}
}
function logMultipleIds(a: string | number, b: string | boolean) {
	if (a === b) {

	} else {
		console.log(a);
	}
}

logId(1);
logId('sfsfgg');
logId(true)

type httpMethod = 'post' | 'get';
type coolString = string;

function fetchWithAuyt(url: string, method: 'post' | 'get'): 1 | -1 {
	return 1;
}
fetchWithAuyt('s', 'post');
fetchWithAuyt('s', 'get');


// type User = {
// 	name: string,
// 	age: number,
// 	skills: string[]
// }
// type Role = {
// 	name: string,
// 	id: number,
// }
// type UserWithRole = User & Role;
// let user: UserWithRole = {
// 	name: 'asd',
// 	age: 33,
// 	skills: ['1', '2'],
// 	id: 1
// }

// type UserWithRole = {
// 	user: User,
// 	role: Role,
// }
// let user: UserWithRole = {
// 	user:{
// 		name: 'asd',
// 		age: 33,
// 		skills: ['1', '2'],
// 	},
// 	role:{
// 		name: 'kkk',
// 		id: 1
// 	}
// }

// interface User {
// 	name: string,
// 	age: number,
// 	skills: string[]

// 	log: (id: number) => string;
// }
// interface Role {
// 	roleId: number,
// }
// type User2 = {
// 	name: string,
// 	age: number,
// 	skills: string[]

// 	log: (id: number) => string;
// }

// interface UserWithRole extends User, Role {

// }
// let user: UserWithRole = {
// 	name: 'asd',
// 	age: 33,
// 	skills: ['1', '2'],
// 	roleId: 1,
// 	log(id) {
// 		return '';
// 	}
// }
// interface UserDic {
// 	[index: number]: User
// }
// type UserDic2 = {
// 	[index: number]: User
// }



// interface User {
// 	name: string
// }

// interface User {
// 	age: number
// }

// type User = {
// 	name: string
// }

// type User  ={
// 	age: number
// }


// const user: User={
// 	name: 'as',
// 	age: 33
// }

// type ID = string | number;

// interface IDI {
// 	ID: string | number;
// }

interface User {
	login: string;
	password?: string | undefined;
}

const user: User = {
	login: '@rfrr',
	password: '1'
}

function multiply(first: number, second?: number): number {
	if (!second) {
		return first * first;
	}
	return first * second;
}

multiply(5);



interface UserPro {
	login: string;
	password?: {
		type: 'primaty' | 'secondary'
	};
}

function testPass(user: UserPro) {
	const t = user.password?.type;
}

function test(param?: string) {
	const t = param ?? multiply(5);
}

interface IPayment {
	sum: number;
	form: number;
	to: number;
}
enum PaymantStatus {
	Success = "success",
	Failed = "failed"
}
interface IPaymentRequst extends IPayment { }


interface IDataSuccess extends IPayment {
	databaseId: number,
	
}
interface IDataFailed {
	errorMessage: number,
	erorCode: number,
}
interface IResponseSuccess {
	status: PaymantStatus.Success;
	data: IDataSuccess;
}

interface IResponseFailed {
	status: PaymantStatus.Failed;
	data: IDataFailed;
}
