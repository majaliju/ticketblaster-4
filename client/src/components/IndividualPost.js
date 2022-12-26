import { useState, useEffect } from 'react';
import EachUser from './EachUser';
import { Link, useNavigate } from 'react-router-dom';

function IndividualPost({ post, concertsUsers, handleDelete }) {
  let navigate = useNavigate();

  console.log('concertsUsers: ', concertsUsers);

  return (
    <div className='relative block p-8 pb-24 border-t-4 border-pink-600 rounded-sm shadow-xl'>
      <h3 className='text-4xl font-bold'>{post.tickets}</h3>
      <h3 className='text-4xl font-bold'>{post.tickets}</h3>
      <p className='mt-4 text-lg font-medium text-gray-500'>{post.body}</p>

      <span className='absolute bottom-8 right-8'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-10 h-10 text-pink-600'
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
