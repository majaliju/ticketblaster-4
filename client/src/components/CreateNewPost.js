import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function CreateNewPost({ currentUser, setCurrentUser, users, setUsers }) {
  const [body, setBody] = useState('');
  const [ticketAmount, setTicketAmount] = useState(0);
  const [errorArray, setErrorArray] = useState([]);
  const [errorsExist, setErrorsExist] = useState(false);
  const [success, setSuccess] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  let isSelling = location.state.isSelling;
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
    fetch('/new_post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        body: body,
        for_sale: isSelling,
        tickets: ticketAmount,
        concert_id: concert.id,
        user_id: currentUser.id,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((createdPost) => {
          // updated currentUser with the right posts
          setCurrentUser({
            ...currentUser,
            posts: [...currentUser.posts, createdPost],
          });
          console.log(currentUser);
          // updated users itself with the updated currentUser (who now has the updatedPost)
          const updatedUsers = users.map((user) => {
            if (user.id === currentUser.id) {
              return currentUser;
            } else {
              return user;
            }
          });
          setUsers(updatedUsers);
          setErrorArray([]);
          setErrorsExist(false);
          setSuccess('Your post has been created!');
          setSubmitted(true);
        });
      } else {
        response.json().then((e) => {
          console.log('e. errors within bad response: ', e.errors);
          // set the errorString to e.errors.join(*join with a comma*)
          setErrorsExist(true);
          setErrorArray(e.errors);
          console.log('errorArray state within bad response: ', errorArray);
        });
      }
    });
  };

  console.log('errorArray state: ', errorArray);

  //* things to note for the error on errors rendering
  //* success is a string, error is an array
  //! issue appears to be with rendering .map on undefined
  //* need to flatten the array and make a string, then render that string basically

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

          {errorsExist !== false ? (
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
                {errorArray.map((eachError) => (
                  <span>{eachError}</span>
                ))}
              </div>
            </div>
          ) : null}

          <h1 className='text-2xl font-bold text-center text-white sm:text-3xl'>
            CREATE A POST!
          </h1>
          <form className='p-8 mt-2 mb-0 space-y-4 rounded-lg shadow-2xl'>
            <div>
              <input
                type='number'
                id='ticketAmount'
                value={ticketAmount}
                onChange={(e) => setTicketAmount(e.target.value)}
                placeholder='how many tickets?'
                className='w-full max-w-xl input input-bordered input-primary'
              />
            </div>

            <div>
              <input
                type='text'
                id='body'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder='write your message here! price, offers, etc'
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

            <Link
              to='/thisUser'
              state={{
                thisUser: currentUser,
              }}
              className='block w-full px-5 py-3 text-sm font-medium text-white rounded-lg btn bg-secondary'>
              VIEW YOUR POSTS
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPost;
