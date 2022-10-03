import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.country);
    const {name, area, region, population, flags} = props.country;
    return (
        <div className='country'>
            <h2> Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;