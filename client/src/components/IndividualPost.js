import { useState, useEffect } from 'react';
import EachUser from './EachUser';
import { Link, useNavigate } from 'react-router-dom';

function IndividualPost({
  eachPost,
  artist,
  concert,
  user,
  users,
  handleDelete,
}) {
  let navigate = useNavigate();

  // checks the user.id from the session against the user's ID here
  // const [userAllowed, setUserAllowed] = useState(false);
  // const [postDeleted, setPostDeleted] = useState(false);

  // useEffect(() => {
  //   if (user.id === eachPost.user_id) {
  //     setUserAllowed(true);
  //   } else {
  //     setUserAllowed(false);
  //   }
  // }, []);

  // const thisUser = users.find(
  //   (thisOne) => parseInt(thisOne.id) === parseInt(eachPost.user_id)
  // );

  console.log('eachPost within IP:', eachPost);
  console.log('concert within IP: ', concert);

  return (
    <div class='p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl'>
      <div class='block p-6 bg-black sm:p-8 rounded-xl'>
        <div class='sm:pr-8'>
          <h2 class='text-xl font-bold text-left text-primary'>
            {/* <h3 class='text-3xl justify-center'>
              by: {eachPost.user.username}
            </h3> */}
          </h2>
          <h2 class='text-xl font-light text-left text-secondary'>
            {/* <h3 class='text-1xl justify-center'>
              {eachPost.for_sale === true ? (
                <div>is selling</div>
              ) : (
                <div>is looking to buy</div>
              )}
            </h3> */}
          </h2>

          <h3 class='mt-2 text-lg text-right text-purple-500'>
            {eachPost.body}
          </h3>
          {/* <h4 class='mt-2 text-md text-right justify-center text-amber-300'>
            email: {user.email}
          </h4> */}
        </div>
        {/* {userAllowed !== false && (
          <div>
            <Link
              to='/editPost'
              state={{
                postID: eachPost.id,
                currentBody: eachPost.body,
                currentTickets: eachPost.tickets,
              }}
              class='btn btn-primary btn-outline w-full'>
              EDIT YOUR POST
            </Link>
            <button
              onClick={() => {
                handleDelete(eachPost);
              }}
              type='submit'
              class='btn btn-secondary btn-outline w-full'>
              DELETE YOUR POST
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default IndividualPost;
