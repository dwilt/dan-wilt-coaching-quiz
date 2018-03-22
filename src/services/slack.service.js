export default async function(data) {
    return window.fetch(
        `https://hooks.slack.com/services/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`,
        {
            method: `POST`,
            body: JSON.stringify(data),
        }
    );
}
