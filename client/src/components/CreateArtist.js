import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function CreatePost({ currentUser, setCurrentUser, users, setUsers }) {
  const [artistName, setArtistName] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [genreName, setGenreName] = useState('');
  const [error, setError] = useState(['test1', 'test2']);
  const [errorString, setErrorString] = useState('');
  const [success, setSuccess] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  let concert = location.state.concert;

  // console.log('concert: ', concert);
  // console.log('currentUser: ', currentUser);

  // //* resetting our states when a new page renders
  //! gotta figure this useEffect out
  // useEffect(() => {
  //   setSuccess('');
  //   setError([]);
  //   setSubmitted(false);
  //   setBody('');
  //   setTicketAmount(0);
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/new_artist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        name: artistName,
        image: imageLink,
        genre: genreName,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((createdArtist) => {});
      } else {
        response.json().then((e) => {
          // render errors here
        });
      }
    });
  };

  return (
    <div>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-lg mx-auto'>
          {success !== '' ? (
            <div className='shadow-lg alert alert-success'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='flex-shrink-0 w-6 h-6 stroke-current'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span>{success}</span>
              </div>
            </div>
          ) : null}
          {/* //! errors aren't rendering; not sure why */}
          {error !== []
            ? error.map((eachError) => {
                <div className='shadow-lg alert alert-warning'>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='flex-shrink-0 w-6 h-6 stroke-current'
                      fill='none'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                      />
                    </svg>
                    <span>test!!!</span>
                    {console.log('eachError: ', eachError)}
                  </div>
                </div>;
              })
            : null}
          <div className='shadow-lg alert alert-warning'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='flex-shrink-0 w-6 h-6 stroke-current'
                fill='none'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                />
              </svg>
              <span>test!!!</span>
            </div>
          </div>

          <h1 className='text-2xl font-bold text-center text-white sm:text-3xl'>
            CREATE AN ARTIST!
          </h1>
          <form className='p-8 mt-2 mb-0 space-y-4 rounded-lg shadow-2xl'>
            <div>
              <input
                type='number'
                id='artistName'
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                placeholder='type in an artist name!'
                className='w-full max-w-xl input input-bordered input-primary'
              />
            </div>

            <div>
              <input
                type='text'
                id='imageLink'
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                placeholder='enter an image link here, a picture of your Artist'
                className='w-full max-w-xl input input-bordered input-secondary'
              />
            </div>
            <div>
              <input
                type='text'
                id='genreName'
                value={genreName}
                onChange={(e) => setGenreName(e.target.value)}
                placeholder='type in the genre name here'
                className='w-full max-w-xl input input-bordered input-secondary'
              />
            </div>
            {submitted === false ? (
              <button
                onClick={handleSubmit}
                type='submit'
                className='block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg'>
                SUBMIT
              </button>
            ) : (
              <button
                disabled
                type='submit'
                className='block w-full px-5 py-3 text-sm font-medium text-white bg-black rounded-lg'>
                SUBMITTED!
              </button>
            )}

            {/* <button
              className='block w-full px-5 py-3 text-sm font-medium text-white rounded-lg bg-secondary'
              onClick={() => navigate(`/`)}>
              VIEW YOUR POSTS
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
