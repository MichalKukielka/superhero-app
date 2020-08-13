import React, { Fragment } from 'react'

function HeroSection({ sec, name }) {
    return (
        <Fragment>
            <h3>{name}</h3>
            {
                Object.entries(sec).map(([ObjKey, value], id) => {
                    const keyParsed = ObjKey.split('-').join(' ').toUpperCase();
                    const valueParsed = Array.isArray(value) ? value.join(', ') : value;
                    return (
                        <li key={ObjKey + id}>
                            <strong>{keyParsed}</strong>: {valueParsed}
                        </li>
                    );
                })
            }
        </Fragment>
    );
}

export default HeroSection
