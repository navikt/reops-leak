import { Alert } from "@navikt/ds-react";

const akselalert = () => {
    return (
        <Alert variant="success" className="mt-0 mb-8 max-w-fit">
            <p>Besøket har blitt logget til Amplitude og Umami</p>
        </Alert>
    );
};

export default akselalert;