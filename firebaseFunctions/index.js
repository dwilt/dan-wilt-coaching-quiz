const functions = require(`firebase-functions`);

import { createQuestions } from './firestore';

exports.createQuestions = functions.https.onRequest((request, response) => {
  const questions = request.body;

  createQuestions(questions)
    .then(() => {
      response.send(`Success!`);

      return true;
    })
    .catch((err) => {
      console.log(err);
    });
});
