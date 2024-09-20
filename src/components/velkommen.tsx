import { GuidePanel, Link } from "@navikt/ds-react";

const Velkommen = () => {
    return (
        <GuidePanel className="prose">
            <p>Velkommen til Leak! Ser du denne meldingen spinner appen på NAIS!</p>
            <p className="mt-4">Hva er Lekk? <Link href="/about">Intro til Leak</Link></p>
        </GuidePanel>
    );
};

export default Velkommen;