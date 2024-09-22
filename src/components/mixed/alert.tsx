import React, { useState, useEffect } from 'react';
import { Alert } from "@navikt/ds-react";

interface Props {
    variant?: 'success' | 'info' | 'warning' | 'error';
    children?: React.ReactNode;
}

export default function AlertComponent({ variant = "success", children }: Props) {
    const [query, setQuery] = useState<string | null>(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const q = searchParams.get('q');
        setQuery(q);
    }, []);

    if (!query) {
        return null; // Don't render anything if there's no query
    }

    return (
        <Alert variant={variant} className="mt-0 mb-8 max-w-fit">
            Søket ditt har blitt logget til Amplitude og Umami
            {/*{children}
            <p>Query: {query}</p>*/}
        </Alert>
    );
}