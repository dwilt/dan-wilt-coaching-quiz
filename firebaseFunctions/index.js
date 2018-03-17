const functions = require(`firebase-functions`);

import { addResult } from "./firestore";

exports.addResult = functions.https.onRequest(async (request, response) => {
    await addResult(request.body);

    response.send({
        stored: true
    });
});
