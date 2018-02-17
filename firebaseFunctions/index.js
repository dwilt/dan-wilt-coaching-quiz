const functions = require(`firebase-functions`);

import { deleteAllQuestions, createQuestion } from './firestore';

exports.createQuestions = functions.https.onRequest(
  async (request, response) => {
    const questions = request.body;

    await deleteAllQuestions(questions);

    await Promise.all(questions.map((question) => createQuestion(question)));

    response.send(`Questions updated!`);
  }
);
