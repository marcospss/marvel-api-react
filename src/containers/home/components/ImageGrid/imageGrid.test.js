import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';
import ImageGrid from './index';

const data = [
    {
        id: 1011334,
        name: "3-D Man",
        description: "",
        modified: "2014-04-29T14:18:17-0400",
        thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
            extension: "jpg"
        },
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1011334",
        comics: {
            available: 1,
            collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/comics",
            items: [{
                resourceURI: "http://gateway.marvel.com/v1/public/comics/21366",
                name: "Avengers: The Initiative (2007) #14"
            }],
            returned: 1
        },
        series: {
            available: 1,
            collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/series",
            items: [{
                resourceURI: "http://gateway.marvel.com/v1/public/series/2045",
                name: "Marvel Premiere (1972 - 1981)"
            }],
            returned: 1
        },
        stories: {
            available: 1,
            collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/stories",
            items: [{
                resourceURI: "http://gateway.marvel.com/v1/public/stories/19947",
                name: "Cover #19947",
                type: "cover"
            }],
            returned: 1
        },
        events: {
            available: 1,
            collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/events",
            items: [{
                resourceURI: "http://gateway.marvel.com/v1/public/events/269",
                name: "Secret Invasion"
            }],
            returned: 1
        },
        urls: [{
            type: "detail",
            url: "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=fc88e56fcb674d36991ba76c85d9df23"
        }]
    }
];

afterEach(cleanup);

test('loads and displays cards for character', () => {
    const history = createMemoryHistory();
    const nameCharacter = '3-D Man';

    const { findAllByText, findAllByAltText } = render(
        <Router history={history}>
            <ImageGrid data={data} />
        </Router>
    );
    expect(findAllByAltText(nameCharacter)).toBeTruthy();
    expect(findAllByText(nameCharacter)).toBeTruthy();
  });