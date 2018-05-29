const functions = require(`firebase-functions`);

const admin = require(`firebase-admin`);

import { ratings } from "./services/scoring.service";

import mailchimp from "./services/mailchimp.service";

import slack from "./services/slack.service";

admin.initializeApp(functions.config().firebase);

async function subscribeToMailchimp({ name, email, rating }) {
    const lists = [mailchimp.mailingLists.javascriptQuizRespondants];

    if (rating === ratings.EXPERT) {
        lists.push(mailchimp.mailingLists.mobileDevReady);
    } else if (rating === ratings.PROFICIENT) {
        lists.push(mailchimp.mailingLists.javascriptProficient);
    } else {
        lists.push(mailchimp.mailingLists.javascriptBeginners);
    }

    await mailchimp.addUserToLists(name, email, lists);
}

async function sendSlackMessage({ name, email }) {
    await slack.sendMessage(`New quiz submission from ${name}: ${email}`);
}

export async function submitQuiz(result) {
    const { subscribedToMailingList, ...rest } = result;
    
    const actions = [
        admin
            .firestore()
            .collection(`results`)
            .add(rest)
    ];

    if (subscribedToMailingList) {
        actions.push(subscribeToMailchimp(rest), sendSlackMessage(rest));
    }

    await Promise.all(actions);
}
