import React from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from './IndividualPost';
import Loading from './Loading';
import EachConcertCard from './EachConcertCard';

//* GOTTA ADJUST STYLING HERE TO FORM EVERYTHING IN THE CENTER CLEANLY

// change thisArtist to artist via direct pass also

function EachArtistCard({
  users,
  posts,
  setPosts,
  artists,
  setArtists,
  user,
  handleDelete,
}) {
  let { id } = useParams();

  const thisArtist = artists.find(
    (artist) => parseInt(id) === parseInt(artist.id)
  );

  console.log('thisArtist within EAC: ', thisArtist);

  //^ ESSENTIAL: handle the id, and thisArtist
  //^

  return (
    <div>
      <div class='bg-base-900 py-6 sm:py-8 lg:py-'>
        {thisArtist !== undefined ? (
          <div key={thisArtist.id} class='mx-auto max-w-screen-xl px-4 md:px-8'>
            <div class='mb-10 md:mb-16'>
              <h1 class='mb-4 text-center text-6xl font-thin uppercase text-primary md:mb-6 lg:text-7xl'>
                {thisArtist.name}
              </h1>
            </div>

            <div class='flex justify-center'>
              <div class='card w-96 bg-base-500 bg-neutral text-neutral-content justify-center shadow-2xl'>
                <div class='avatar'>
                  <div class='w-30 rounded'>
                    <img
                      src={thisArtist.image}
                      alt='a small avatar of the music thisArtist'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class='grid mx-40'>
              <h1 class='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
                ALL POSTS FOR {thisArtist.name}
              </h1>
              {thisArtist.posts.map((eachPost) => (
                <IndividualPost
                  eachPost={eachPost}
                  posts={posts}
                  setPosts={setPosts}
                  users={users}
                  user={user}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
            <div>
              <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
                <div class='mb-10 md:mb-16'>
                  <h1 class='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
                    CONCERTS
                  </h1>
                  <p class='mx-auto uppercase text-center max-w-screen-md text-secondary text-gray-500 md:text-lg'></p>
                </div>
                <div class='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
                  {thisArtist.concerts.map((concert) => (
                    <EachConcertCard
                      concert={concert}
                      thisArtist={thisArtist}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default EachArtistCard;

//* cool card component to implement for eachArtistCard
//* darkened background with content on hover

// <a class="relative block bg-black group" href="">
//   <img
//     class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity  group-hover:opacity-50"
//     src="https://www.hyperui.dev/photos/man-6.jpeg"
//     alt=""
//   />
//   <div class="relative p-8">
//     <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
//       Developer
//     </p>

//     <p class="text-2xl font-bold text-white">Barry Scott</p>

//     <div class="mt-64">
//       <div
//         class="opacity-0 transition-all transform translate-y-8  group-hover:opacity-100 group-hover:translate-y-0"
//       >
//         <p class="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//           perferendis hic asperiores quibusdam quidem voluptates doloremque
//           reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </a>
