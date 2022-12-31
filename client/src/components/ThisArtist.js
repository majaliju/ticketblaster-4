import React from 'react';
import { Navigate, useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from '../og-components/IndividualPost';
import Loading from './Loading';
import EachConcertCard from './EachConcertCard';

function ThisArtist({ artists, concerts, loggedIn }) {
  const location = useLocation();
  const artist = location.state.artist;
  const artistsConcerts = location.state.artistsConcerts;

  console.log('artistsConcerts: ', artistsConcerts);

  return (
    <div>
      <div className='py-6 bg-base-900 sm:py-8 lg:py-'>
        {artist !== (undefined || '' || null) ? (
          <div key={artist.id} className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='mb-10 md:mb-16'>
              <h1 className='mb-4 text-6xl font-thin text-center uppercase text-primary md:mb-6 lg:text-7xl'>
                {artist.name}
              </h1>
            </div>

            <div className='flex justify-center'>
              <div className='justify-center shadow-2xl card w-96 bg-base-500 bg-neutral text-neutral-content'>
                <div className='avatar'>
                  <div className='rounded w-30'>
                    <img
                      src={artist.image}
                      alt='a small avatar of the music thisArtist'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
                <div className='mb-10 md:mb-16'>
                  <h1 className='mb-4 text-6xl font-thin text-center text-primary md:mb-6 lg:text-7xl'>
                    CONCERTS
                  </h1>
                  <p className='max-w-screen-md mx-auto text-center text-gray-500 uppercase text-secondary md:text-lg'></p>
                </div>
                <div className='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
                  {artistsConcerts.map((concert) => (
                    <EachConcertCard concert={concert} loggedIn={loggedIn} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default ThisArtist;
