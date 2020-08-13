import React from 'react'
import HeroSection from './HeroSection'

function HeroItem({ hero }) {


    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'
                    style={
                        {
                            backgroundImage: `url(${hero.image.url})`
                        }
                    }
                >
                <h1>{hero.name}</h1>
                </div>
                <div className='card-back'>
                    <h1>{hero.name}</h1>
                    <HeroSection sec={hero.biography} name={"Biography"} />
                    <HeroSection sec={hero.powerstats} name={"Powerstats"} />
                </div>
            </div>
        </div>)
}

export default HeroItem
