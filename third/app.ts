// const skills:string[] = ['dev','devOps','Tescting'];

// for(const skill of skills){
// 	console.log(skill.toLocaleLowerCase());
// }

// const res = skills.filter((s:string) => s!=='devOps')
// .map(s=> {return 1})
// .reduce((a,b)=> a+b);

// console.log(res)

const skill: readonly [number, string] = [1, 'Dev'];

const skills: ReadonlyArray<string> =['dev','devOps'];

const [id, skillName] = skill;

const arr: [number, string,...boolean[]] = [1, 'Dev', true, true, false];

