import React from 'react';

const Title = ({children}) => {
    return (
        <h1 className='bg-linear-60 from-green-50 to-green-200 p-5 m-5 font-bold text-2xl text-green-700 rounded-xl'>{children}</h1>
    );
};

export default Title;