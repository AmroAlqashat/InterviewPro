import React from 'react';

interface StatisticsCardProps {
    header: string;
    body: string;
}

function StatisticsCard({ header, body }: StatisticsCardProps): React.ReactElement {
    return(
        <div className='statistics'>
            <h2 className='text-3xl mb-2.5 text-orange font-bold'>{header}</h2>
            <p className='text-gray-600 text-sm'>{body}</p>
        </div>
    );
}

export default StatisticsCard;