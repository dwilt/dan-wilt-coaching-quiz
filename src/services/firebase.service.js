export async function fireFetch(cloudFunctionName, body = {}) {
    const headers = new Headers();

    const fetchParams = {
        method: `POST`,
        mode: `cors`,
        headers,
    };

    let baseUrl = `https://us-central1-dan-wilt-coaching-assessmen.cloudfunctions.net/${cloudFunctionName}`;

    if (Object.keys(body).length) {
        fetchParams.body = JSON.stringify(body);
        headers.append(`Content-Type`, `application/json`);
    }

    const res = await fetch(baseUrl, fetchParams);

    const data = await res.json();

    if (!res.ok) {
        return Promise.reject(data);
    } else {
        return data;
    }
}
