import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import EachArtistCard from './EachArtistCard';
import IndividualPost from './IndividualPost';
import Loading from './Loading';

function UsersPage({ users, concerts }) {
  const location = useLocation();
  const thisUser = location.state.thisUser;

  const user = users.find(
    (eachUser) => parseInt(eachUser.id) === parseInt(thisUser.id)
  );

  const usersPosts = user.posts;

  console.log('usersPosts :', usersPosts);

  return (
    <div className='py-6 bg-base-900 sm:py-8 lg:py-12'>
      <div>
        {user !== undefined ? (
          <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='mb-10 md:mb-16'>
              <h1 className='mb-4 text-6xl font-thin text-center text-primary md:mb-6 lg:text-7xl'>
                {user.username}
              </h1>
            </div>
            <div className='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
              {usersPosts.map((post) => (
                <IndividualPost
                  post={post}
                  givenUser={user}
                  concerts={concerts}
                />
              ))}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default UsersPage;
