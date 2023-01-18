import React from 'react';

function FormatDate({data}) {
    return (
        <div className="col-2 center">
            {new Date(data).toLocaleString('fa-IR')}
        </div>
    );
}

export default FormatDate;