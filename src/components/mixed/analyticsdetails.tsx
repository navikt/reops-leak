const analyticsdetails = () => {
    return (
        <>
            <p className="max-w-prose mb-4 mt-8 font-semibold">Tilkoblede analyseverktøy</p>
            <ul className="list-inside list-disc">
                <li><a
                    href="https://app.eu.amplitude.com/analytics/nav/space/product-analytics/product-overview?app=100008939">Amplitude</a>
                    <ul className="list-inside list-disc ml-6">
                        <li>Amplitude prosjekt: "Reops Leak - test"</li>
                        <li>Amplitude public api key: "7883e1a1c733f2cfdf634b71f523ae67"</li>
                    </ul>
                </li>
                <li className="mt-1"><a href="https://umami.ansatt.nav.no/share/pYHYL85MeTxivZtg/leak.ansatt.nav.no">Umami</a>
                    <ul className="list-inside list-disc ml-6">
                        <li>Umami team: "nav - test"</li>
                        <li>Umami website id: "0a0bc436-1eac-45ac-81ab-697ab77ebec1"</li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default analyticsdetails;