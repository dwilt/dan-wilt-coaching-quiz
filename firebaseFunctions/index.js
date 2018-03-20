const functions = require(`firebase-functions`);

const cors = require(`cors`)({
    origin: true
});

import { addResult } from "./firestore";

exports.addResult = functions.https.onRequest(async (req, res) => {
    await addResult(req.body);

    return cors(req, res, () => {
        res.send({
            stored: true
        });
    });
});
