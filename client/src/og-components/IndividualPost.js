import { useState, useEffect } from 'react';
import EachUser from '../components/ThisUser';
import { Link, useNavigate } from 'react-router-dom';

function IndividualPost({
  post,
  concert,
  concerts,
  concertsUsers,
  givenUser,
  handleDelete,
}) {
  let navigate = useNavigate();

  const [thisUser, setThisUser] = useState('blankName');
  const [concertInfo, setConcertInfo] = useState({
    location: 'Empty Default',
    artist: { name: 'Fake Artist' },
  });
  const [isOriginalPoster, setIsOriginalPoster] = useState(false);

  // if user coming from EachConcertCard, then it'll receive concertsUsers
  // if user coming from the btn Link on IndividualPost's username, then it'll receive givenUser
  useEffect(() => {
    // if a username was given but no concerts
    if (concertsUsers === undefined) {
      setThisUser(givenUser);
      const matchingConcert = concerts.find(
        (thisConcert) => thisConcert.id === post.concert_id
      );
      setConcertInfo(matchingConcert);
    }
    // if concerts were given but no username
    else if (givenUser === undefined) {
      const matchingUser = concertsUsers.find(
        (eachUser) => parseInt(eachUser.id) === parseInt(post.user_id)
      );
      setThisUser(matchingUser);
      setConcertInfo(concert);
    }
  }, []);

  // console.log('post in IP: ', post);
  // console.log('concertInfo in IP: ', concertInfo);

  return (
    <div className='relative block p-8 pb-24 border-t-4 rounded-sm shadow-xl border-secondary'>
      {/* <h4 className='text-3xl font-thin'>
        {concertInfo.artist.name} at {concertInfo.location}
      </h4> */}
      {post.for_sale === true ? (
        <h3 className='text-4xl font'>SELLING: {post.tickets} TICKETS</h3>
      ) : (
        <h3 className='text-4xl font'>BUYING: {post.tickets} TICKETS</h3>
      )}

      <Link
        to='/thisUser'
        state={{
          thisUser: thisUser,
        }}
        className='text-2xl font-thin btn btn-ghost text-secondary'>
        {thisUser.username}
      </Link>

      <h3 className='text-xl font-thin text-secondary'>{thisUser.email}</h3>
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
