const functions = require(`firebase-functions`);
const admin = require(`firebase-admin`);

admin.initializeApp(functions.config().firebase);

function createQuestions(questions) {
    return Promise.all(questions.map(question => admin
        .firestore()
        .collection(`questions`)
        .add(question)
    ));
}

exports.createQuestions = functions.https.onRequest((request, response) => {
    const questions = request.body;

    createQuestions(questions).then(() => {
        response.send(`Success!`);

        return true;
    }).catch(err => {
        console.log(err);
    });
});
