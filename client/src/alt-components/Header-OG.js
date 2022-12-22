/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

function Header({ user, setUser, onLogin, onLogout, loggedIn }) {
  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => onLogout());
  }

  // useEffect(() => {
  //   fetch('/me').then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     } else console.log('fetch /me failed due to: ', response);
  //   });
  // }, []);

  // TODO dropdown should exit as soon as item is clicked

  return (
    <div>
      <div class='navbar bg-base-700 text-primary-content'>
        <div class='navbar-start'>
          <div class='dropdown'>
            <label tabindex='0' class='btn btn-ghost sm:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabindex='0'
              class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56'>
              <li>
                <NavLink to='/artists'>
                  <button class='uppercase font-bold'>artists</button>
                </NavLink>
              </li>
              <li>
                <NavLink to='/venues'>
                  <button class='uppercase font-bold'>venues</button>
                </NavLink>
              </li>
              <li>
                <NavLink to='/genres'>
                  <button class='uppercase font-bold'>genres</button>
                </NavLink>
              </li>
              <li>
                <NavLink to='/concerts'>
                  <button class='uppercase font-bold'>concerts</button>
                </NavLink>
              </li>
              <div>
                {user === null && (
                  <li>
                    <NavLink class='uppercase font-bold' to='/login'>
                      <button class='uppercase font-bold'>login</button>
                    </NavLink>
                  </li>
                )}
                {user !== null && (
                  <div>
                    <li>
                      <NavLink class='uppercase font-bold' to='/'>
                        <button
                          class='uppercase font-bold'
                          onClick={handleLogout}>
                          logout {user.username}
                        </button>
                      </NavLink>
                    </li>
                  </div>
                )}
              </div>
            </ul>
          </div>
          <div class='flex'>
            <NavLink to='/'>
              <button class='btn btn-ghost normal-case text-5xl flex-auto'>
                ticketblaster
              </button>
            </NavLink>
          </div>
        </div>
        <div class='navbar-center hidden sm:flex'>
          <div class='flex-auto'>
            <ul class='menu menu-horizontal p-0'>
              <li>
                <NavLink to='/artists'>
                  <button class='uppercase font-bold'>artists</button>
                </NavLink>
              </li>
              <li>
                <NavLink to='/venues'>
                  <button class='uppercase font-bold'>venues</button>
                </NavLink>
              </li>
              <li>
                <NavLink to='/genres'>
                  <button class='uppercase font-bold'>genres</button>
                </NavLink>
              </li>
              <li>
                <NavLink to='/concerts'>
                  <button class='uppercase font-bold'>concerts</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div class='navbar-end hidden sm:flex'>
          <div class='flex-initial'>
            <ul class='menu menu-horizontal float-right p-0'>
              {user === null && (
                <li>
                  <NavLink class='uppercase font-bold' to='/login'>
                    <button class='uppercase font-bold'>login</button>
                  </NavLink>
                </li>
              )}
              {user !== null && (
                <div>
                  <li>
                    {/*               
                  //^ USE A NAVIGATE HERE TO SEND USER TO USERSPAGE (aka '/') when user logs out 
              */}
                    <button class='uppercase font-bold' onClick={handleLogout}>
                      logout {user.username}
                    </button>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

/* //^ORIGINAL NAVBAR -- SAVED HERE
<div class='navbar bg-base-700 text-primary-content'>
  <div class='flex-1'>
    <NavLink to='/'>
      <button class='btn btn-ghost normal-case text-2xl'>ticketblaster</button>
    </NavLink>
  </div>
  <div class='flex-none'>
    <ul class='menu menu-horizontal p-0'>
      <li>
        <NavLink to='/artists'>
          <button class='uppercase font-bold'>artists</button>
        </NavLink>
      </li>
      <li>
        <NavLink to='/concerts'>
          <button class='uppercase font-bold'>concerts</button>
        </NavLink>
      </li>
      <li>
        <NavLink to='/venues'>
          <button class='uppercase font-bold'>venues</button>
        </NavLink>
      </li>
      {user === null && (
        <li>
          <NavLink class='uppercase font-bold' to='/login'>
            <button class='uppercase font-bold'>login</button>
          </NavLink>
        </li>
      )}
      {user !== null && (
        <li>
          <button class='uppercase font-bold' onClick={handleLogout}>
            logout
          </button>
        </li>
      )}
    </ul>
  </div>
</div>;
*/
