async function fetchMetrics() {
    const response = await fetch('https://reops-proxy.intern.nav.no/umami/v2/api/websites/0a0bc436-1eac-45ac-81ab-697ab77ebec1/metrics?range=days&unit=day&timezone=Europe%2FOslo&type=query&search=q');
    const metrics = await response.json();
    return metrics;
}