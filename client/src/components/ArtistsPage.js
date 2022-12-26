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
    <div>
      <div class='bg-base-900 py-6 sm:py-8 lg:py-'>
        {artist !== undefined ? (
          <div key={artist.id} class='mx-auto max-w-screen-xl px-4 md:px-8'>
            <div class='mb-10 md:mb-16'>
              <h1 class='mb-4 text-center text-6xl font-thin uppercase text-primary md:mb-6 lg:text-7xl'>
                {artist.name}
              </h1>
            </div>

            <div class='flex justify-center'>
              <div class='card w-96 bg-base-500 bg-neutral text-neutral-content justify-center shadow-2xl'>
                <div class='avatar'>
                  <div class='w-30 rounded'>
                    <img
                      src={artist.image}
                      alt='a small avatar of the music thisArtist'
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div class='grid mx-40'>
            <h1 class='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
              ALL POSTS FOR {thisArtist.name}
            </h1>
            {thisArtist.posts.map((eachPost) => (
              <IndividualPost
                eachPost={eachPost}
                posts={posts}
                setPosts={setPosts}
                users={users}
                user={user}
                handleDelete={handleDelete}
              />
            ))}
          </div> */}
            <div>
              <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
                <div class='mb-10 md:mb-16'>
                  <h1 class='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
                    CONCERTS
                  </h1>
                  <p class='mx-auto uppercase text-center max-w-screen-md text-secondary text-gray-500 md:text-lg'></p>
                </div>
                <div class='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
                  {artistsConcerts.map((concert) => (
                    <EachConcertCard concert={concert} />
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

export default ArtistsPage;
