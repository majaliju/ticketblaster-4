import { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

//! TAILWIND DOCS FOR STYLING: hovers, form input etc
// https://tailwindcss.com/docs/hover-focus-and-other-states

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorArray, setErrorArray] = useState([]);
  const [errorsExist, setErrorsExist] = useState(false);
  const [success, setSuccess] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // function checkError(response) {
  //   if (response.status >= 200 && response.status <= 299) {
  //     return response.json();
  //   } else {
  //     //~ below is where I gotta set a better error from the login (configure backend for it)
  //     setError(response.status);
  //     throw response;
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((info) => {
          console.log('info: ', info);
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
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch('/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //     }),
  //   })
  //     .then(checkError)
  //     .then((item) => {
  //       onLogin(item);
  //       navigate('/');
  //     });
  // }

  return (
    <div class='text-primary-content'>
      <div class='hero min-h-screen bg-base-200'>
        <div class='hero-content flex-col '>
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
          <div class='text-center lg:text-center'>
            <h1 class='text-5xl font-bold'>LOGIN</h1>
          </div>
          <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div class='card-body'>
              <form onSubmit={handleSubmit}>
                <div class='form-control'>
                  <label class='label'>
                    <span class='label-text uppercase'>username</span>
                  </label>
                  <input
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div class='form-control'>
                  <label class='label'>
                    <span class='label-text uppercase'>password</span>
                  </label>
                  <input
                    type='text'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class='form-control mt-6'>
                  <button class='btn btn-primary'>Login</button>
                </div>
                <label>
                  <button
                    type='submit'
                    class='btn btn-ghost font-bold form-control text-secondary-content uppercase'>
                    <Link to='/signup'>First time here? Sign up!</Link>
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// //* use the floating label in input -- it's really nice
// <!--
//   This component uses @tailwindcss/forms

//   yarn add @tailwindcss/forms
//   npm install @tailwindcss/forms

//   plugins: [require('@tailwindcss/forms')]
// -->

// <label class="relative block p-3 border-2 border-gray-200 rounded-lg" for="name">
//   <input
//     class="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
//     id="name"
//     type="text"
//     placeholder="Name"
//   />

//   <span class="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
//     Name
//   </span>
// </label>
