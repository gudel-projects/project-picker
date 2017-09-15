import React from 'react';

const LoadingIndicator = ({ loading }) => {
  console.log(loading);
  return loading
    ? <div className='loadingIndicator'>Loading...</div>
    : null;
};

export default LoadingIndicator;
