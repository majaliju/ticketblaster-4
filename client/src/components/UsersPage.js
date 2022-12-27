import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import EachArtistCard from './EachArtistCard';
import IndividualPost from './IndividualPost';
import Loading from './Loading';

function UsersPage({ users, searchTerm, setSearchTerm }) {
  const location = useLocation();
  const thisUser = location.state.thisUser;

  console.log('thisUser within UsersPage: ', thisUser);

  const user = users.find(
    (eachUser) => parseInt(eachUser.id) === parseInt(thisUser.id)
  );

  console.log('user :', user);

  const usersPosts = user.posts;
  console.log('usersPosts: ', usersPosts);
  const usersConcerts = user.concerts;
  console.log('usersConcerts: ', usersConcerts);

  return (
    <div className='py-6 bg-base-900 sm:py-8 lg:py-12'>
      <div className='form-control'>
        <label className='flex input-group input-group-lg'>
          <span>SEARCH</span>
          <input
            type='text'
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search here for anything from any post...'
            class='input input-bordered w-full input-lg text-center'
          />
        </label>
      </div>
      <div>
        {user !== undefined ? (
          <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='mb-10 md:mb-16'>
              <h1 className='mb-4 text-6xl font-thin text-center text-primary md:mb-6 lg:text-7xl'>
                {user.username}
              </h1>
            </div>
            <div className='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
              {usersPosts
                // .filter((eachPost) => {
                //   if (eachPost === '') {
                //     return eachPost;
                //   } else if (
                //     eachPost.body
                //       .toLowerCase()
                //       .includes(searchTerm.toLowerCase()) ||
                //     eachPost.tickets.includes(searchTerm)
                //   ) {
                //     return eachPost;
                //   }
                // })
                .map((post) => (
                  <IndividualPost post={post} givenUser={user} />
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
