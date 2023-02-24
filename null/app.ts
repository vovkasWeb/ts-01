const  n: null = null;
const n1: any =null;
// const n2: number = null;
 // const n3: 

 interface User {
name: string;
 }
function getUser(){
if(Math.random()>0.5){
	return null;
}else{
	return{
		name: "вася"
	} as User
}
}

const user = getUser();
const n55 = user?.name;