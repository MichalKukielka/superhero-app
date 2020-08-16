import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import HeroItem from './HeroItem';

const HeroesGrid = ({heroes}) => {    
    if (heroes.response === 'error' && heroes.error === 'character with given name not found') {
        return (
            <section className="center">
                <h1>Try to find another Super Hero</h1>
            </section>
         );
    } else if (heroes.response === 'success') {
        const superHeroes = heroes.results;
        return (
            <div className="cards">
                {superHeroes.map((hero, id) => {
                    return (
                        <HeroItem key={id} hero={hero} />
                    )
                })}
            </div>
        );
    }

    return (
      <Fragment></Fragment>
    );
}

HeroesGrid.propTypes = {
    heroes: PropTypes.object.isRequired
}

export default HeroesGrid