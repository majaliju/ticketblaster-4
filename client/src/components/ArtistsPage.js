import React from 'react';
import { Navigate, useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from './IndividualPost';
import Loading from './Loading';
import EachConcertCard from './EachConcertCard';

function ArtistsPage({ artists, concerts }) {
  let { id } = useParams();

  const thisArtist = artists.find(
    (artist) => parseInt(id) === parseInt(artist.id)
  );
  console.log('thisArtist: ', thisArtist);

  const artistsConcerts = concerts.filter(
    (thisConcert) => parseInt(thisConcert.artist_id) === parseInt(id)
  );

  console.log('concerts within ArtistsPage: ', concerts);
  return (
    <div>
      <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div class='mb-10 md:mb-16'>
          <h1 class='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
            {thisArtist.name}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ArtistsPage;
