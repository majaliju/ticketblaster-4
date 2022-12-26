import React from 'react';
import { Navigate, useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from './IndividualPost';
import Loading from './Loading';
import EachConcertCard from './EachConcertCard';

function ArtistsPage({ artists, concerts }) {
  const location = useLocation();
  const artist = location.state.artist;
  const artistsConcerts = location.state.artistsConcerts;

  console.log('artistsConcerts within ArtistsPage: ', artistsConcerts);
  return (
    <div class='bg-base-900 py-6 sm:py-8 lg:py-12'>
      <div>
        {artist !== undefined ? (
          <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
            <div class='mb-10 md:mb-16'>
              <h1 class='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
                {artist.name}
                <img className='w-72 rounded' src={artist.image} />
              </h1>
            </div>
            <div class='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
              {artistsConcerts.map((concert) => {
                {
                  console.log('concert :', concert);
                }

                // concert.map((eachPost) => {
                //   <IndividualPost
                //     eachPost={eachPost}
                //     artist={artist}
                //     concert={concert}
                //   />;
                // });
              })}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default ArtistsPage;
