import axios from "axios";

import { SLACK_URL } from "../keys";

async function sendMessage(text) {
    try {
        await axios.post(SLACK_URL, {
            text
        });
    } catch (e) {
        console.log("failed to send slack message");
        console.log("error: ", e);
    }
}

export default {
    sendMessage
};
