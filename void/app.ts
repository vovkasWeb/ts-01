function logId(id: string | number): void {
	console.log(id);
}

const a = logId(1);

function multiply(f: number, s?: number):number |void {
	if(!s){
		return f * f;
	}
	
}

type voidFucn =()=> void;


const f1: voidFucn = ()=>{

}
const f2: voidFucn =()=>{
	return true;
}

const b  =f2();
const arr = ['dev','devoOps'];
const user ={
	s:['s']
}

arr.forEach(element =>  user.s.push(element));

console.log(user)