const functions = require(`firebase-functions`);
const admin = require(`firebase-admin`);

admin.initializeApp(functions.config().firebase);

export function createQuestions(questions) {
  return Promise.all(
    questions.map((question) =>
      admin
        .firestore()
        .collection(`questions`)
        .add(question)
    )
  );
}
