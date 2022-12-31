import React from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from '../og-components/IndividualPost';
import Loading from './Loading';

function EachConcertCard({ loggedIn, concert, usersPageTag, concerts }) {
  return (
    <div>
      <div className='py-6 bg-base-900 sm:py-8 lg:py-'>
        {concert !== undefined ? (
          <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='flex justify-center'>
              <div className='justify-center shadow-2xl card w-96 bg-base-500 bg-neutral text-neutral-content'>
                <div className=''>
                  <div className='rounded w-30'>
                    <img
                      src={concert.artist.image}
                      alt='a small avatar of the musical artist'
                    />
                  </div>
                  <div className='rounded w-30'>
                    <img
                      src={concert.image}
                      alt='a small avatar of the venue'
                    />
                  </div>
                </div>

                <div className='items-center text-center card-body'>
                  <h2 className='card-title'>
                    {concert.artist.name} at {concert.location} on{' '}
                    {concert.date}
                  </h2>

                  {loggedIn === true ? (
                    <div className='justify-end card-actions'>
                      <Link
                        to='/createNewPost'
                        state={{
                          isSelling: true,
                          concert: concert,
                        }}
                        className='w-full btn btn-secondary btn-outline'>
                        I'M SELLING
                      </Link>
                      <Link
                        to='/createNewPost'
                        state={{
                          isSelling: false,
                          concert: concert,
                        }}
                        className='w-full btn btn-primary btn-outline'>
                        I'M BUYING
                      </Link>

                      <Link
                        to='/showPosts'
                        state={{
                          concert: concert,
                        }}
                        className='w-full btn btn-accent btn-outline'>
                        SHOW MORE POSTS
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <Link
                        to='/login'
                        state={{}}
                        className='w-full btn btn-accent btn-outline'>
                        LOGIN TO SEE MORE
                      </Link>
                    </div>
                  )}
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

export default EachConcertCard;
