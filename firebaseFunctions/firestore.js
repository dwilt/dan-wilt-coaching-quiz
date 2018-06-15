const functions = require(`firebase-functions`);

const admin = require(`firebase-admin`);

import { ratings } from "./services/scoring.service";

import mailchimp from "./services/mailchimp.service";

import slack from "./services/slack.service";

admin.initializeApp(functions.config().firebase);

async function subscribeToMailchimp({
    name,
    email,
    rating,
    subscribedToMailingList
}) {
    const lists = [mailchimp.mailingLists.javascriptQuizRespondants];

    if (subscribedToMailingList) {
        lists.push(mailchimp.mailingLists.danWiltCoachingUpdates);
    }

    if (rating === ratings.EXPERT) {
        lists.push(mailchimp.mailingLists.mobileDevReady);
    } else if (rating === ratings.PROFICIENT) {
        lists.push(mailchimp.mailingLists.javascriptProficient);
    } else {
        lists.push(mailchimp.mailingLists.javascriptBeginners);
    }

    await mailchimp.addUserToLists(name, email, lists);
}

async function sendSlackMessage({ name, email, subscribedToMailingList }) {
    const subscribedSentence = subscribedToMailingList
        ? "They subscribed for periodic mailing updates! 🙌"
        : `They didn't subscribe for periodic mailing updates. 😞`;

    await slack.sendMessage(
        `${name} (${email}) just took the quiz! ${subscribedSentence}`
    );
}

export async function submitQuiz(result) {
    await Promise.all([
        admin
            .firestore()
            .collection(`results`)
            .add(result),
        subscribeToMailchimp(result),
        sendSlackMessage(result)
    ]);
}
