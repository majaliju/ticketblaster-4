import { useState, useEffect } from 'react';
import EachUser from './EachUser';
import { Link, useNavigate } from 'react-router-dom';

function IndividualPost({ post, concert, handleDelete }) {
  let navigate = useNavigate();

  // console.log('post within IP: ', post);
  // console.log('concert within IP: ', concert);

  const userOfThisPost = concert.users.map((user) => {
    console.log('user ', user);
  });

  return (
    <div className='shadow-xl card w-96 bg-base-100'>
      <div className='card-body'>
        <h2 className='card-title'></h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='justify-end card-actions'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default IndividualPost;
