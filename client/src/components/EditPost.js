import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function EditPost({ user, posts, setPosts }) {
  const navigate = useNavigate();

  const location = useLocation();
  let currentBody = location.state.currentBody;
  let currentTickets = location.state.currentTickets;
  let postID = location.state.postID;

  const [body, setBody] = useState(currentBody);
  const [ticketAmount, setTicketAmount] = useState(currentTickets);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/update_post/${postID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        comment_body: body,
        tickets: ticketAmount,
        user_id: user.id,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((theNewPost) => {
          const updatedPosts = posts.filter((thisPost) => {
            if (thisPost.id === theNewPost.id) {
              return theNewPost;
            } else {
              return thisPost;
            }
          });
          setPosts(updatedPosts);
          setError([]);
          setSuccess('Your post has been successfully updated!');
          setSubmitted(true);
        });
      } else {
        response.json().then((e) => {
          console.log('e : ', e);
          console.log('e. errors: ', e.errors);
          setError(e.errors);
        });
      }
    });
  };

  return (
    <div>
      <div class='px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
        <div class='max-w-lg mx-auto'>
          {success !== '' ? (
            <div class='alert alert-success shadow-lg'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='stroke-current flex-shrink-0 h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
                <span>{success}</span>
              </div>
            </div>
          ) : null}
          {/* {error !== []
            ? error.map((eachError) => {
                <div class='alert alert-warning shadow-lg'>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='stroke-current flex-shrink-0 h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                      />
                    </svg>
                    <span>{eachError}</span>
                    {console.log('eachError: ', eachError)}
                  </div>
                </div>;
              })
            : null} */}

          <h1 class='text-2xl font-bold text-center text-white sm:text-3xl'>
            EDIT YOUR POST!
          </h1>

          <form class='p-8 mt-2 mb-0 rounded-lg shadow-2xl space-y-4'>
            <div>
              <input
                type='number'
                id='ticketAmount'
                value={ticketAmount}
                onChange={(e) => setTicketAmount(e.target.value)}
                placeholder='how many tickets?'
                class='input input-ghost w-full '
              />
            </div>

            <div>
              <input
                type='text'
                id='body'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder='write your message here! price, offers, etc'
                class='input input-ghost w-full '
              />
            </div>
            {submitted === false ? (
              <button
                onClick={handleSubmit}
                type='submit'
                class='block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg'>
                SUBMIT
              </button>
            ) : (
              <button
                disabled
                type='submit'
                class='block w-full px-5 py-3 text-sm font-medium text-white bg-black rounded-lg'>
                SUBMITTED!
              </button>
            )}

            <button
              class='block w-full px-5 py-3 text-sm font-medium text-white  bg-secondary rounded-lg'
              onClick={() => navigate('/')}>
              VIEW YOUR POSTS
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
