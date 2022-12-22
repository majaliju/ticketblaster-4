import { useState } from 'react';
import EachUser from './EachUser';
import { Link, useNavigate } from 'react-router-dom';

function IndividualPost({ eachPost, posts }) {
  let navigate = useNavigate();

  const thisPost = posts.find(
    (post) => parseInt(eachPost.id) === parseInt(post.id)
  );

  //* include the user and link to EachUser page, where each users Posts display

  //* do the thing where you can click the link and open up the email app
  //* stylize the app better as well

  return (
    <div class='p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl'>
      <div class='block p-6 bg-white sm:p-8 rounded-xl'>
        <div class='sm:pr-8'>
          <h2 class='text-xl font-bold text-center text-gray-900'>
            {thisPost.for_sale === true ? (
              <h1 class='text-3xl justify-center'>
                SELLING {thisPost.how_many_tickets} TICKETS
              </h1>
            ) : (
              <span class='text-3xl justify-center'>
                LOOKING FOR {thisPost.how_many_tickets} TICKETS
              </span>
            )}
          </h2>

          <p class='mt-2 text-sm text-center  text-gray-500'>{thisPost.body}</p>
        </div>
      </div>
    </div>
  );
}

export default IndividualPost;

{
  //* the original
  /* <div class='p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl'>
  <div class='block p-2 sm:p-4 rounded-xl'>
    <div class='m-2 sm:pr-4'>
      <h2 class='text-xl font-bold text-gray-900'>
        {thisPost.for_sale === true ? (
          <h1 class='text-3xl justify-center'>
            SELLING {thisPost.how_many_tickets} TICKETS
          </h1>
        ) : (
          <span class='text-3xl justify-center'>
            LOOKING FOR {thisPost.how_many_tickets} TICKETS
          </span>
        )}
      </h2>
      <h2 class='mt-2 text-lg text-white'>{thisPost.body}</h2>
    </div>
    <h4 class='mt-2 text-lg text-white'>EMAIL: {thisPost.user.email}</h4>
    <h4 class='mt-2 text-lg text-white'>
      <button
        class='btn btn-ghost btn-outline outline-black'
        onClick={() => navigate(`/concerts/${thisPost.concert.id}`)}>
        SEE CONCERT INFO
      </button>
    </h4>
  </div>
</div>; */
}
