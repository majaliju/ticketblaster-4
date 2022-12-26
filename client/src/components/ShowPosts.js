import { useState, useEffect } from 'react';
import EachUser from './EachUser';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

function ShowPosts({}) {
  const location = useLocation();
  const concert = location.state.concert;

  console.log('concert within ShowPosts: ', concert);

  const posts = concert.posts.map((post) => {
    console.log('each post :', post);
  });

  return (
    <div className='py-6 bg-base-900 sm:py-8 lg:py-'>
      {concert !== undefined ? (
        <div key={concert.id} className='max-w-screen-xl px-4 mx-auto md:px-8'>
          <div className='mb-10 md:mb-16'>
            <h1 className='mb-4 text-6xl font-thin text-center uppercase text-primary md:mb-6 lg:text-7xl'>
              {concert.artist.name} at {concert.location}
            </h1>
          </div>

          <div className='flex justify-center'>
            <div className='justify-center shadow-2xl card w-96 bg-base-500 bg-neutral text-neutral-content'>
              <h1> text here</h1>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ShowPosts;
