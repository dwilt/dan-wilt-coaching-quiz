const functions = require(`firebase-functions`);

const cors = require(`cors`)({
    origin: true
});

import { submitQuiz } from "./firestore";

async function submitQuizHandler(req, res) {
    await submitQuiz(req.body);

    res.send({
        submitted: true
    });
}

exports.submitQuiz = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        await submitQuizHandler(req, res);
    });
});
