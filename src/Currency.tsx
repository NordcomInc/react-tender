import React, { FunctionComponent } from 'react';

interface CurrencyProps {
    value: number;
    currency: string;
}
export const Currency: FunctionComponent<CurrencyProps> = ({ value, currency }) => {
    return (
        <>
            {value} {currency}
        </>
    );
};
