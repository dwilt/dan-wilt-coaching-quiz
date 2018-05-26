// import Mailchimp from "mailchimp-api-v3";
import axios from "axios";

import { MAILCHIMP_KEY, mailingLists } from "../keys";

// const mailchimp = new Mailchimp(MAILCHIMP_KEY);

async function addUserToLists(firstName, email, lists = []) {
    try {
        // await mailchimp.batch(
        //     lists.map(list => ({
        //         method: "post",
        //         path: `/lists/${list}/members`,
        //         body: {
        //             email_address: email,
        //             status: "subscribed",
        //             merge_fields: {
        //                 FNAME: firstName
        //             }
        //         }
        //     }))
        // );

        await Promise.all(
            lists.map(list => {
                return axios({
                    method: "post",
                    url: `https://us17.api.mailchimp.com/3.0/lists/${list}/members`,
                    headers: {
                        ["content-type"]: "application/json"
                    },
                    data: {
                        email_address: email,
                        status: "subscribed",
                        merge_fields: {
                            FNAME: firstName
                        }
                    },
                    auth: {
                        user: "anystring",
                        password: MAILCHIMP_KEY
                    }
                });
            })
        );
    } catch (e) {
        console.log("Error in addUserToLists", e);
    }
}

export default {
    mailingLists,
    addUserToLists
};
