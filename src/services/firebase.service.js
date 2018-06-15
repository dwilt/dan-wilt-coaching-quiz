export async function fireFetch(cloudFunctionName, body = {}) {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let baseUrl = `https://us-central1-dan-wilt-coaching-assessmen.cloudfunctions.net/${cloudFunctionName}`;

    const res = await window.fetch(baseUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
        return window.Promise.reject(data);
    } else {
        return data;
    }
}
