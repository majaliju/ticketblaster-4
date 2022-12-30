import { useState, useEffect } from 'react';
import EachUser from './UsersPage';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function EachUserPost({ currentUser, post, concerts }) {
  let navigate = useNavigate();
  const location = useLocation();
  const thisUser = location.state.thisUser;

  // console.log('matchingConcert: ', matchingConcert);
  // console.log('currentUser within EUP: ', currentUser);

  const [isOriginalPoster, setIsOriginalPoster] = useState(false);
  const matchingConcert = concerts.find(
    (thisConcert) => parseInt(thisConcert.id) === parseInt(post.concert_id)
  );

  useEffect(() => {
    if (parseInt(thisUser.id) === parseInt(currentUser.id)) {
      setIsOriginalPoster(true);
    }
  });

  return (
    <div className='relative block p-8 pb-24 border-t-4 rounded-sm shadow-xl border-secondary'>
      {/* <h4 className='text-3xl font-thin'>
        {matchingConcert.artist.name} at {matchingConcert.location}
      </h4> */}
      {/* <div className='avatar'>
        <div className='rounded'>
          <img
            src={matchingConcert.artist.image}
            alt='a small avatar of the musical artist'
          />
        </div>
        <div className='rounded'>
          <img src={matchingConcert.image} alt='a small avatar of the venue' />
        </div>
      </div> */}

      {post.for_sale === true ? (
        <h3 className='text-4xl font'>SELLING: {post.tickets} TICKETS</h3>
      ) : (
        <h3 className='text-4xl font'>BUYING: {post.tickets} TICKETS</h3>
      )}

      <h3 className='text-xl font-thin text-secondary'>{thisUser.email}</h3>
      <p className='mt-4 text-lg font-medium text-accent'>{post.body}</p>
      {isOriginalPoster === true ? (
        <Link
          to='/editPost'
          state={{
            postID: post.id,
            currentBody: post.body,
            currentTickets: post.tickets,
          }}
          className='w-full btn btn-secondary btn-outline'>
          EDIT YOUR POST
        </Link>
      ) : null}

      <span className='absolute bottom-8 right-8'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-10 h-10 text-secondary'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M13 10V3L4 14h7v7l9-11h-7z'
          />
        </svg>
      </span>
    </div>
  );
}

export default EachUserPost;
