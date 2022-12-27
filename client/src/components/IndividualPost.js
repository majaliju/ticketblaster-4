import { useState, useEffect } from 'react';
import EachUser from './UsersPage';
import { Link, useNavigate } from 'react-router-dom';

function IndividualPost({
  post,
  concert,
  concertsUsers,
  givenUser,
  handleDelete,
}) {
  let navigate = useNavigate();

  console.log('post: ', post);
  // const thisUser = concertsUsers.find(
  //   (eachUser) => parseInt(eachUser.id) === parseInt(post.user_id)
  // );

  const [thisUser, setThisUser] = useState('blankName');

  // if user coming from EachConcertCard, then it'll receive concertsUsers
  // if user coming from the btn Link on IndividualPost's username, then it'll receive givenUser
  useEffect(() => {
    if (concertsUsers === undefined) {
      setThisUser(givenUser);
    } else if (givenUser === undefined) {
      const matchingUser = concertsUsers.find(
        (eachUser) => parseInt(eachUser.id) === parseInt(post.user_id)
      );
      setThisUser(matchingUser);
    }
  }, []);

  console.log('givenUser: ', givenUser);
  // include concert info (name, location, artist)

  return (
    <div className='relative block p-8 pb-24 border-t-4 rounded-sm shadow-xl border-secondary'>
      {post.for_sale === true ? (
        <h3 className='text-4xl font-bold'>SELLING: {post.tickets} TICKETS</h3>
      ) : (
        <h3 className='text-4xl font-bold'>BUYING: {post.tickets} TICKETS</h3>
      )}

      <Link
        to='/thisUser'
        state={{
          thisUser: thisUser,
        }}
        className='text-2xl font-thin btn btn-ghost'>
        {thisUser.username}
      </Link>

      <h3 className='text-xl font-bold'>{thisUser.email}</h3>
      <p className='mt-4 text-lg font-medium text-accent'>{post.body}</p>

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

export default IndividualPost;
