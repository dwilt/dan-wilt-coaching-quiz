const functions = require(`firebase-functions`);
const admin = require(`firebase-admin`);

admin.initializeApp(functions.config().firebase);

export async function addResult(result) {
    await admin
        .firestore()
        .collection(`results`)
        .add(result);
}
