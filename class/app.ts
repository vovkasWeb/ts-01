class User {
	name: string;
	age: number;
	constructor();
	constructor(name: string);
	constructor(age: number);
	constructor(name: string, age: number);
	constructor(ageOrName?: string | number, age?: number) {
		if (typeof ageOrName === 'string') {
			this.name = ageOrName;
		} else if (typeof ageOrName === 'string'){
			this.age = ageOrName;
		}
		if(typeof age ==='number'){
			this.age =age;
		}
	}
}

const user = new User('vovka');
const user2 = new User();
const user3 = new User(33);
const user4 = new User('Вася',33);
console.log(user);


user.name = 'slavik';
console.log(user);

class Admin {
	role: number;

}

const admin = new Admin();
admin.role = 1;

