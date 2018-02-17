const functions = require(`firebase-functions`);
const admin = require(`firebase-admin`);

admin.initializeApp(functions.config().firebase);

export function getAllQuestions() {
  return admin
    .firestore()
    .collection(`questions`)
    .get();
}

export function createQuestion(question) {
  return admin
    .firestore()
    .collection(`questions`)
    .add(question);
}

export function getQuestion(id) {}

export function deleteAllQuestions() {
  return getAllQuestions().then(({ docs }) =>
    Promise.all(docs.map((doc) => doc.ref.delete()))
  );
}
