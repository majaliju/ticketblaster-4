import React from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from './IndividualPost';
import Loading from './Loading';
import CreatePost from './CreatePost';

function EachConcertCard({ concert }) {
  // TODO
  //^ center the card in the middle of the page
  //* potentially add click links on artist's name and venue name

  return (
    <div>
      <div class='bg-base-900 py-6 sm:py-8 lg:py-'>
        {concert !== undefined ? (
          <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
            <div class='flex justify-center'>
              <div class='card w-96 bg-base-500 bg-neutral text-neutral-content justify-center shadow-2xl'>
                <div class='avatar'>
                  <div class='w-30 rounded'>
                    <img
                      src={concert.artist.image}
                      alt='a small avatar of the musical artist'
                    />
                  </div>
                </div>
                <div class='avatar'>
                  <div class='w-30 rounded'>
                    <img
                      src={concert.venue.image}
                      alt='a small avatar of the venue'
                    />
                  </div>
                </div>
                <div class='card-body items-center text-center'>
                  <h2 class='card-title'>{concert.artist.name}</h2>
                  <p>at</p>
                  <h2 class='card-title'>{concert.venue.name}</h2>

                  <div class='card-actions justify-end'>
                    <Link
                      to='/createNewPost'
                      state={{
                        isSelling: true,
                        concertID: concert.id,
                        artistID: concert.artist_id,
                      }}
                      class='btn btn-secondary w-full'>
                      I'M SELLING!
                    </Link>
                    <Link
                      to='/createNewPost'
                      state={{
                        isSelling: false,
                        concertID: concert.id,
                        artistID: concert.artist_id,
                      }}
                      class='btn btn-secondary w-full'>
                      I'M BUYING!
                    </Link>
                  </div>
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
