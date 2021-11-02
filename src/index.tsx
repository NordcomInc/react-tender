import React, { FunctionComponent } from 'react';

interface CurrencyProps {
    value: number;
    locale?: string;
    currency?: string;
}
export const Currency: FunctionComponent<CurrencyProps> = ({ value, locale, currency }) => {
    let formatted = '';

    if (Intl) formatted = new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
    else
        value.toLocaleString(locale ?? 'en-US', {
            style: 'currency',
            currency: currency ?? 'USD'
        });

    return <>{formatted}</>;
};
