const functions = require(`firebase-functions`);

import { deleteAllQuestions, addQuestion, addAnswer } from "./firestore";

exports.addAnswer = functions.https.onRequest(async (request, response) => {
    const { email, question, answer, version } = request.body;

    await addAnswer({ email, question, answer, version });

    response.send(`Answer added!`);
});

exports.createQuestions = functions.https.onRequest(
    async (request, response) => {
        const { version, questions } = request.body;

        await deleteAllQuestions(version);

        await Promise.all(
            questions.map((question, i) =>
                addQuestion({
                    question: {
                        ...question,
                        index: i
                    },
                    version
                })
            )
        );

        response.send(`Questions updated for version ${version}!`);
    }
);
