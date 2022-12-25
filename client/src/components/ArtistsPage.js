import React from 'react';
import { Navigate, useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from './IndividualPost';
import Loading from './Loading';
import EachConcertCard from './EachConcertCard';

function ArtistsPage({ artists, concerts }) {
  // let { id, params } = useParams();
  const location = useLocation();
  const artist = location.state.artist;

  console.log('artist:', artist);

  // console.log('artists: ', artists);

  //? why doesn't work and render only that artists concerts?
  const artistsConcerts = concerts.filter(
    (concert) => parseInt(concert.artist_id) === parseInt(artist.id)
  );

  console.log('artistsConcerts within ArtistsPage: ', artistsConcerts);
  return (
    <div>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h1 className='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
            {artist.name}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ArtistsPage;
