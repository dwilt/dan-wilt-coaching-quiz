import axios from "axios";

import { SLACK_URL } from "../keys";

async function sendMessage(text) {
    return axios.post(SLACK_URL, {
        text
    });
}

export default {
    sendMessage
};
