import { useState, useEffect } from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';

function DeleteConfirmation({
  currentUser,
  setCurrentUser,
  users,
  setUsers,
  handleDelete,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  let post = location.state.post;

  const [submitted, setSubmitted] = useState(false);

  // function handleDelete(post) {
  //   fetch(`/delete_post/${post.id}`, {
  //     method: 'DELETE',
  //   })
  //     .then((r) => r.json())
  //     .then((info) => console.log('deleted info: ', info));
  //   const updatedPosts = currentUser.posts.filter(
  //     (thisPost) => thisPost.id !== post.id
  //   );
  //   setCurrentUser({ ...currentUser, posts: updatedPosts });
  //   const updatedUsers = users.filter((user) => {
  //     if (user.id === currentUser.id) {
  //       return currentUser;
  //     } else {
  //       return user;
  //     }
  //   });
  //   setUsers(updatedUsers);
  // }

  // function handleDelete(post) {
  //   fetch(`/delete_post/${post.id}`, {
  //     method: 'DELETE',
  //   });
  //   const updatedPosts = currentUser.posts.filter(
  //     (thisPost) => thisPost.id !== post.id
  //   );
  //   setCurrentUser({ ...currentUser, posts: updatedPosts });
  //   const updatedUsers = users.filter((user) => {
  //     if (user.id === currentUser.id) {
  //       return currentUser;
  //     } else {
  //       return user;
  //     }
  //   });
  //   setUsers(updatedUsers);
  // }

  const deleteAndRedirect = () => {
    console.log('post within DAR: ');
    handleDelete(post);
    navigate('/thisUser');
  };

  console.count(post);

  return (
    <div className='card w-96 bg-neutral text-neutral-content'>
      <div className='items-center text-center card-body'>
        <h2 className='card-title'>Are you sure??</h2>
        <p>Once you click delete, that post is gone forever!!</p>
        <div className='justify-end card-actions'>
          {submitted === false ? (
            <button
              onClick={() => {
                handleDelete(post);
                setSubmitted(true);
              }}
              type='submit'
              className='block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg'>
              YES I'M SURE!
            </button>
          ) : (
            <button
              disabled
              className='block w-full px-5 py-3 text-sm font-medium text-white bg-black rounded-lg'>
              IT'S DELETED!
            </button>
          )}

          <Link
            to='/thisUser'
            state={{ thisUser: currentUser }}
            className='w-full btn btn-primary'>
            GO VIEW YOUR POSTS
          </Link>
          {/* //! GOTTA TRY SOME VERSION OF BELOW, TRICKY THOUGH */}
          {/* <button
            to='/thisUser'
            state={{ thisUser: currentUser }}
            className='btn btn-primary'
            onClick={deleteAndRedirect}>
            DELETE YOUR POST
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
