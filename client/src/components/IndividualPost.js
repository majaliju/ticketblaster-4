import { useState, useEffect } from 'react';
import EachUser from './EachUser';
import { Link, useNavigate } from 'react-router-dom';

function IndividualPost({
  eachPost,
  artists,
  setArtists,
  posts,
  setPosts,
  users,
  user,
  handleDelete,
}) {
  let navigate = useNavigate();

  // checks the user.id from the session against the user's ID here
  const [userAllowed, setUserAllowed] = useState(false);
  const [postDeleted, setPostDeleted] = useState(false);

  useEffect(() => {
    if (user.id === eachPost.user_id) {
      setUserAllowed(true);
    } else {
      setUserAllowed(false);
    }
  }, []);

  // const thisUser = users.find(
  //   (thisOne) => parseInt(user.id) === parseInt(eachPost.user_id)
  // );

  const thisPost = posts.find((post) => post.id === eachPost.id);
  console.log('thisPost within IndividualPost: ', thisPost);

  //! use posts here to sort thru all the posts instead of linking

  //^ POTENTIAL ESSENTIAL: include the user and link to EachUser page, where each users Posts display
  //^ CONFIGURE THE STYLING ON THE USERNAME
  //& EXTRA BONUS: do the thing where you can click the link and open up the email app

  // if done via thisArtist, then the username issues pops up
  // if done via posts, then the username issue resolves but isn't via thisArtist (in one nested assocation)

  return (
    <div class='p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl'>
      <div class='block p-6 bg-black sm:p-8 rounded-xl'>
        <div class='sm:pr-8'>
          <h2 class='text-xl font-bold text-left text-primary'>
            <h3 class='text-3xl justify-center'>
              by: {thisPost.user.username}
            </h3>
          </h2>
          <h2 class='text-xl font-light text-left text-secondary'>
            <h3 class='text-1xl justify-center'>
              {thisPost.for_sale === true ? (
                <div>is selling</div>
              ) : (
                <div>is looking to buy</div>
              )}
            </h3>
          </h2>

          <h3 class='mt-2 text-lg text-right text-purple-500'>
            {thisPost.comment_body}
          </h3>
          <h4 class='mt-2 text-md text-right justify-center text-amber-300'>
            email: {thisPost.user.email}
          </h4>
        </div>
        {userAllowed !== false && (
          <div>
            <Link
              to='/editPost'
              state={{
                postID: thisPost.id,
                currentBody: thisPost.comment_body,
                currentTickets: thisPost.tickets,
              }}
              class='btn btn-primary btn-outline w-full'>
              EDIT YOUR POST
            </Link>
            <button
              onClick={() => {
                handleDelete(thisPost);
              }}
              type='submit'
              class='btn btn-secondary btn-outline w-full'>
              DELETE YOUR POST
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndividualPost;
