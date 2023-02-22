enum StatusCode {
	SUCCESS = 1,
	IN_PROCESS = 2,
	FAILED = 3,
}
const res = {
	message: 'платеж успешнвый',
	statusCode: StatusCode.SUCCESS,
}

//1 - успех
//2  -в процессе
//3 - отклонен

if (res.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {

}
action(StatusCode.SUCCESS);
action(1);

function compute() {
	return 3;
}

const enum Roles {
	ADMIN = 1,
	USER = 2,
}


const res2 = Roles.ADMIN;

// -------------------------------------------------------------
/* Запрос */
// {
// 	"topicId": 5,
// 		"status": "published" // "draft", "deleted"
// }
/* Ответ */
// [
// 	{
// 		"question": "Как осуществляется доставка?",
// 		"answer": "быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "published"
// 	}
// ]
enum QuestionStatus {
	Published = 'published',
	Draft = 'draft',
	Deleted = 'deleted',

}
async function getFaqs(req: {
	topicId: number;
	status?: QuestionStatus
}): Promise<{
	qustion: string;
	answer: string;
	tags: string[];
	likes: number;
	status: QuestionStatus;
}[] > {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}
