import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IndividualPost from './IndividualPost';
import EachPostForUser from './EachUserPost';
import EachUserPost from './EachUserPost';

function HomePage({ currentUser, users, sessionInfo, loggedIn, handleDelete }) {
  // function handleDelete(eachPost) {
  //   fetch(`/delete_post/${eachPost.id}`, {
  //     method: 'DELETE',
  //   });
  //   console.log('deletedPost :', eachPost);
  //   const remainingPosts = posts.filter(
  //     (thisPost) => parseInt(thisPost.id) !== parseInt(eachPost.id)
  //   );
  //   setPosts(remainingPosts);
  // }

  const homePosts = currentUser.posts;

  return (
    <div>
      <div>
        {loggedIn === true && (
          <div
            class='hero min-h-screen'
            style={{
              backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
            }}>
            <div class='hero-overlay bg-opacity-50'>
              {' '}
              <div>
                {homePosts.map((post) => {
                  <EachUserPost
                    // handleDelete={handleDelete}
                    post={post}
                    users={users}
                    currentUser={currentUser}
                  />;
                })}
              </div>
            </div>
            <div class='hero-content text-center text-neutral-content'>
              <div class='max-w-md'>
                <h1 class='mb-5 text-5xl font-bold'>
                  Welcome back, {currentUser.username}!
                </h1>
                <p class='mb-5'>Your sessionID is {sessionInfo.session_id}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {loggedIn === false && (
          <div
            class='hero min-h-screen'
            style={{
              backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
            }}>
            <div class='hero-overlay bg-opacity-60'></div>
            <div class='hero-content text-center text-neutral-content'>
              <div class='max-w-md'>
                <h1 class='mb-5 text-5xl font-bold'>
                  Welcome to ticketblaster!
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
export default HomePage;

// //* a nice gradient usersPage with actions & gradient
// //* https://www.hyperui.dev/components/marketing/banners
// //* also pull the image from the 3rd image one
// //* code here is for the 2nd one: Actions & Gradient
