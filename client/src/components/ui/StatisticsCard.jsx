import React from 'react';
import PropTypes from 'prop-types';

function StatisticsCard({ header, body }){
    return(
        <div className='statistics'>
            <h2 className='text-4xl mb-2.5 text-orange font-bold'>{header}</h2>
            <p className='text-gray-600'>{body}</p>
        </div>
    );
}

StatisticsCard.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string
}

export default StatisticsCard;