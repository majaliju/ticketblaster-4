import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UsersPage({ user, sessionInfo, loggedIn }) {
  return (
    <div>
      <div>
        {user !== '' && (
          <div
            class='hero min-h-screen'
            style={{
              backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
            }}>
            <div class='hero-overlay bg-opacity-60'></div>
            <div class='hero-content text-center text-neutral-content'>
              <div class='max-w-md'>
                <h1 class='mb-5 text-5xl font-bold'>
                  Welcome back, {user.username}!
                </h1>
                <p class='mb-5'>Your sessionID is {sessionInfo.session_id}</p>
                <h2 class='mb-5 text-3xl font-bold'>
                  HERE ONE DISPLAYS THE USER'S POSTS, BOTH FOR SALE AND
                  REQUESTING!
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {user === '' && (
          <div
            class='hero min-h-screen'
            style={{
              backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
            }}>
            <div class='hero-overlay bg-opacity-60'></div>
            <div class='hero-content text-center text-neutral-content'>
              <div class='max-w-md'>
                <h1 class='mb-5 text-5xl font-bold'>
                  Welcome to ticketblaster
                </h1>
                <p class='mb-5'>
                  The #1 place to find tickets or sell tickets directly to other
                  fans of your favorite artist!
                </p>

                <Link to='/login' class='btn btn-primary'>
                  Login or Sign Up to get started!
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default UsersPage;

// //* a nice gradient usersPage with actions & gradient
// //* https://www.hyperui.dev/components/marketing/banners
// //* also pull the image from the 3rd image one
// //* code here is for the 2nd one: Actions & Gradient

// <section class="text-white bg-gray-900">
//   <div class="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
//     <div class="max-w-3xl mx-auto text-center">
//       <h1 class="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
//         Understand User Flow.

//         <span class="sm:block">
//           Increase Conversion.
//         </span>
//       </h1>

//       <p class="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
//       </p>

//       <div class="flex flex-wrap justify-center mt-8 gap-4">
//         <a class="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring" href="/get-started">
//           Get Started
//         </a>

//         <a class="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring" href="/about">
//           Learn More
//         </a>
//       </div>
//     </div>
//   </div>
// </section>
