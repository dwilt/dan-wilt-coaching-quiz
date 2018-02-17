const functions = require(`firebase-functions`);
const admin = require(`firebase-admin`);

admin.initializeApp(functions.config().firebase);

export async function getAllQuestions() {
  return admin
    .firestore()
    .collection(`questions`)
    .get();
}

export async function createQuestion(question) {
  return admin
    .firestore()
    .collection(`questions`)
    .add(question);
}

export async function getQuestion(id) {}

export async function deleteAllQuestions() {
  return getAllQuestions().then(({ docs }) =>
    Promise.all(docs.map((doc) => doc.ref.delete()))
  );
}
