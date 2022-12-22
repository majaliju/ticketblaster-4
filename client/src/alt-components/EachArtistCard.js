import React from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from './IndividualPost';
import Loading from './Loading';
import EachConcertCard from './EachConcertCard';

//* GOTTA ADJUST STYLING HERE TO FORM EVERYTHING IN THE CENTER CLEANLY

function EachArtistCard({ posts, artists, concerts }) {
  let { id } = useParams();

  const thisArtist = artists.find(
    (artist) => parseInt(id) === parseInt(artist.id)
  );

  const [selling, setSelling] = useState(0);
  const [looking, setLooking] = useState(0);
  const [upcomingShows, setUpcomingShows] = useState(0);

  //& these 3 blocks of code need serious refactoring; everything that populates selling & looking
  useEffect(() => {
    if (thisArtist !== undefined) {
      getPostType();
      getShows();
    }
  }, []);

  function getPostType() {
    // eslint-disable-next-line array-callback-return
    thisArtist.posts.map((each) => {
      if (each.for_sale === true) {
        setSelling(selling + 1);
      } else {
        setLooking(looking + 1);
      }
    });
  }

  function getShows() {
    thisArtist.concerts.map((each) => setUpcomingShows(upcomingShows + 1));
  }

  // TODO
  //^ center the card in the middle of the page
  //* potentially remove I have tickets to sell and I'm looking for tickets

  return (
    <div>
      <div class='bg-base-900 py-6 sm:py-8 lg:py-'>
        {thisArtist !== undefined ? (
          <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
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
                <div class='card-body items-center text-center'>
                  <h2 class='card-title'>{thisArtist.name}</h2>
                  <p>
                    There's {upcomingShows} upcoming concerts listed for{' '}
                    {thisArtist.name}!
                  </p>
                  <div>
                    <div class='badge badge-primary uppercase'>
                      {selling} selling
                    </div>
                    <div class='badge badge-primary uppercase'>
                      {looking} looking
                    </div>
                  </div>
                  <div class='card-actions justify-end'>
                    <Link
                      to='/artists'
                      class='btn btn-outline btn-secondary w-full'>
                      Go Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class='grid mx-40'>
              <h2 class='my-10 text-center text-5xl font-thin uppercase text-primary md:mb-6 lg:text-6xl'>
                ALL POSTS
              </h2>
              {thisArtist.posts.map((each) => (
                <IndividualPost eachPost={each} posts={posts} />
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
                  {concerts
                    .filter((concert) => {
                      if (concert.artist.id === thisArtist.id) {
                        return concert;
                      }
                    })
                    .map((concert) => (
                      <EachConcertCard concert={concert} posts={posts} />
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
