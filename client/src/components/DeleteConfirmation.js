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

  function handleDelete(post) {
    fetch(`/delete_post/${post.id}`, {
      method: 'DELETE',
    });
    const updatedPosts = currentUser.posts.filter(
      (thisPost) => thisPost.id !== post.id
    );
    setCurrentUser({ ...currentUser, posts: updatedPosts });
    const updatedUsers = users.filter((user) => {
      if (user.id === currentUser.id) {
        return currentUser;
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  }

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
          <Link
            to='/thisUser'
            state={{ thisUser: currentUser }}
            className='btn btn-primary'
            onClick={() => {
              handleDelete(post);
            }}>
            DELETE YOUR POST
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
