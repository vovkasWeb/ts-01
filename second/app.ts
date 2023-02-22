function getFullName(userEntity: {firstname: string, surname: string}) :string{
 return `${userEntity.firstname} ${userEntity.surname} 0_0`;
}

const user = {
	firstname: 'Vova',
	surname: 'Orlovsky',
	city: 'Dnipro',
	age: 21,
	skills: {
		dev: true,
		devops: true,
	}
};





console.log(getFullName(user));

let info:{
	officeId: number;
	isOpened: boolean;
	contacts: {
		phone: string;
		email: string;
		address:{
			city: string
		}
	}
} 