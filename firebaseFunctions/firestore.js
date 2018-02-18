const functions = require(`firebase-functions`);
const admin = require(`firebase-admin`);

admin.initializeApp(functions.config().firebase);

export async function addAnswer({ email, question, answer, version }) {
    return admin
        .firestore()
        .collection(`results`)
        .doc(email)
        .collection(`results`)
        .doc(version)
        .set({
            [question]: answer
        });
}

export async function getAllQuestions(version) {
    return admin
        .firestore()
        .collection(`questions`)
        .doc(version)
        .collection(`questions`)
        .get();
}

export async function addQuestion({ question, version }) {
    await admin
        .firestore()
        .collection(`questions`)
        .doc(version)
        .set(
            {
                [question.id]: question
            },
            {
                merge: true
            }
        );
}

export async function deleteAllQuestions(version) {
    return getAllQuestions(version).then(({ docs }) =>
        Promise.all(docs.map((doc) => doc.ref.delete()))
    );
}
