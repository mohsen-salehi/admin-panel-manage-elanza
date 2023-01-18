import React from 'react';

function FormatNumber({number}) {
    return (
        <span className="px-1">{new Intl.NumberFormat().format(Number(number))}</span>
    );
}

export default FormatNumber;