import { useState, useEffect } from 'react';
import EachUser from './EachUser';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from './Loading';
import IndividualPost from './IndividualPost';

function ShowPosts({ handleDelete }) {
  const location = useLocation();
  const concert = location.state.concert;

  console.log('concert within ShowPosts: ', concert);

  const concertsPosts = concert.posts;
  const concertsUsers = concert.users;

  concertsPosts.map((each) => console.log('each', each));

  return (
    <div className='py-6 bg-base-900 sm:py-8 lg:py-'>
      {concert !== undefined ? (
        <div key={concert.id} className='max-w-screen-xl px-4 mx-auto md:px-8'>
          <div className='mb-10 md:mb-16'>
            <h1 className='mb-4 text-6xl font-thin text-center uppercase text-primary md:mb-6 lg:text-7xl'>
              {concert.artist.name} at {concert.location}
            </h1>
          </div>
          <div className='mb-10'>
            {concertsPosts.map((post) => (
              <IndividualPost post={post} concertsUsers={concertsUsers} />
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ShowPosts;
