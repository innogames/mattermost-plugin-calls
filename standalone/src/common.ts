export function getCallID() {
    const params = new URLSearchParams(window.location.search);
    return params.get('call_id');
}

export function getCallTitle() {
    const params = new URLSearchParams(window.location.search);
    return params.get('title') || '';
}

export function getToken() {
    if (!window.location.hash) {
        return '';
    }

    const encoded = window.location.hash.substr(1);

    // Performing URL safe base64 decoding.
    const data = JSON.parse(atob(encoded.replace(/_/g, '/').replace(/-/g, '+')));

    return data.token || '';
}
