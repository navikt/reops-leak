(() => {
    "use strict";

    const {
        location: { hostname, pathname, search },
    } = window;

    const currentScript = document.currentScript;
    if (!currentScript) return;

    const getAttribute = (attr) => currentScript.getAttribute(attr);

    const appId = getAttribute("data-app-id");
    const hostUrl = getAttribute("data-host-url");
    const includeQuery = getAttribute("data-include-url-query") !== "false";

    if (!appId || !hostUrl) {
        console.error("Tracking script requires 'data-app-id' and 'data-host-url'.");
        return;
    }

    const payload = {
        url_host: hostname,
        url_path: pathname,
        url_query: includeQuery ? search : "",
        app_id: appId,
    };

    const sendEvent = (eventName, additionalData = {}) => {
        if (!eventName) return;

        const eventPayload = {
            ...payload,
            event_name: eventName,
            ...additionalData,
        };

        fetch(hostUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventPayload),
        }).catch((err) => {
            console.error("Failed to send tracking event:", err);
        });
    };

    // Example: Auto-track page views
    const autoTrack = getAttribute("data-auto-track") !== "false";
    if (autoTrack) {
        sendEvent("pageview");
    }

    // Expose a global tracking function
    window.tracker = {
        track: sendEvent,
    };
})();