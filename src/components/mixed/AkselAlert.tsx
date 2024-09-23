import { Alert } from "@navikt/ds-react";

interface Props {
    variant?: 'success' | 'info' | 'warning' | 'error';
    children?: React.ReactNode;
}

export default function AkselAlert({ variant = "success", children }: Props) {
    return (
        <Alert variant={variant} className="mt-0 mb-8 max-w-md">
            {children}
        </Alert>
    );
}