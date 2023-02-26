"use strict";
// enum PaymentStatus {
// 	Holded,
// 	Processed,
// 	Reversed
// }
// class Payment {
// 	id: number;
// 	status: PaymentStatus;
// 	createdAt: Data;
// 	updatedAt: Data;
// 	constructor(id: number) {
// 		this.id = id;
// 		this.createdAt = new Data();
// 		this.status = PaymentStatus.Holded;
// 	}
// 	getPaymentLifeTime(): number {
// 		return new Data().getTime() - this.createdAt.getTime();
// 	}
// 	unholdPayment():void{
// 		if(this.status == PaymentStatus.Processed){
// 			throw new Error('Платеж не может бытоь возращен!');
// 		}
// 		this.status = PaymentStatus.Reversed;
// 		this.updatedAt = new Data();
// 	}
// }
// const payment = new Payment(1);
// payment.unholdPayment();
// const time = payment.getPaymentLifeTime();
// class User {
// 	skills: string[];
// 	addSkill(skills: string): void;
// 	addSkill(skills: string[]): void;
// 	addSkill(skillOrSkills: string | string[]): void {
// 		if (typeof skillOrSkills == 'string') {
// 			this.skills.push(skillOrSkills)
// 		} else {
// 			this.skills.concat(skillOrSkills);
// 		}
// 	}
// }
// function run(distance: number): string;
// function run(distance: string): number;
// function run(distance: number | string): number | string {
// 	if (typeof distance == 'number') {
// 		return 1;
// 	} else {
// 		return "";
// 	}
// }
// run()
class User {
    set login(l) {
        this._login = "user-" + l;
    }
}
const user = new User();
user.login = 'myLogin';
console.log(user);
