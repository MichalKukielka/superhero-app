import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HeroesGrid from './HeroesGrid';


describe('HeroesGrid component', () => {
    test("Render Component with wrong Super Hero name", async () => {
        const heroes = {
            response: "error",
            error: "character with given name not found"
        };
        const { getByText } = render(<HeroesGrid heroes={heroes}/>);
        expect(getByText("Try to find another Super Hero")).toBeInTheDocument();
    })

    test("Render Component with empty Super Hero name", async () => {
        const heroes = {
            response: "error", 
            error: "bad name search request"
        }
        const { getByText } = render(<HeroesGrid heroes={heroes}/>);
        expect(getByText("")).toBeInTheDocument();
    })


});
