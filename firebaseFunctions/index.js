const functions = require(`firebase-functions`);

import { deleteAllQuestions, createQuestion } from './firestore';

exports.createQuestions = functions.https.onRequest((request, response) => {
  const questions = request.body;

  deleteAllQuestions(questions)
    .then(() =>
      Promise.all(questions.map((question) => createQuestion(question))).then(
        () => {
          response.send(`Success!`);

          return true;
        }
      )
    )
    .catch((err) => {
      console.log(err);
    });
});
