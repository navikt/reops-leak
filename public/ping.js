(() => {
    "use strict";

    const {
        location: { hostname, pathname, search },
        navigator: { doNotTrack },
    } = window;

    const currentScript = document.currentScript;
    if (!currentScript) return;

    const getAttribute = (attr) => currentScript.getAttribute(attr);

    // New attributes
    const team = getAttribute("data-ping-team");
    const app = getAttribute("data-ping-app");
    const environment = getAttribute("data-ping-environment");

    // Hardcoded host URL
    const hostUrl = "https://ping.ekstern.dev.nav.no/event";

    const includeQuery = getAttribute("data-ping-include-url-query") !== "false";
    const respectDoNotTrack = getAttribute("data-ping-respect-do-not-track") === "true";

    if (respectDoNotTrack && doNotTrack === "1") {
        console.log("Do Not Track is enabled. Tracking is disabled.");
        return;
    }

    if (!team || !app || !environment) {
        console.error("Tracking script requires 'data-ping-team', 'data-ping-app', and 'data-ping-environment'.");
        return;
    }

    // URL-related data to be included in payload
    const urlData = {
        url_host: hostname,
        url_path: pathname,
        url_query: includeQuery ? search : "",
    };

    const sendEvent = (eventName, additionalData = {}) => {
        if (!eventName) return;

        const eventPayload = {
            team,
            app,
            environment,
            event_name: eventName,
            payload: {
                ...urlData,
                ...additionalData,
            },
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

    // Example: Auto-track page views - disabled by default, enabled only if explicitly set to "true"
    const autoTrack = getAttribute("data-ping-auto-track") === "true";
    if (autoTrack) {
        sendEvent("pageview");
    }

    // Expose a global tracking function
    window.tracker = {
        track: sendEvent,
    };
})();