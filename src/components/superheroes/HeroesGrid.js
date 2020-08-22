import React, { Fragment } from 'react';
import { RESPONSE, ERROR_CODE } from '../../constants'
import HeroItem from './HeroItem';

const HeroesGrid = ({heroes}) => {    
    if (heroes.response === RESPONSE.ERROR && heroes.error === ERROR_CODE.NO_HERO) {
        return (
            <section className="center">
                <h1>Try to find another Super Hero</h1>
            </section>
         );
    } else if (heroes.response === RESPONSE.SUCCESS) {
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

export default HeroesGrid