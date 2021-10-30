import React, { FunctionComponent } from 'react';

interface CurrencyProps {
    value: number;
    locale?: string;
    currency?: string;
}
export const Currency: FunctionComponent<CurrencyProps> = ({ value, locale, currency }) => {
    return (
        <>
            {value.toLocaleString(locale ?? 'en-US', {
                style: 'currency',
                currency: currency ?? 'USD'
            })}
        </>
    );
};
